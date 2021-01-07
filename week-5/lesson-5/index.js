const express = require('express')
const PersonService = require('./services/person-service')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.get('/', (req,res) => {
  //res.send('/.index.html') //send --> any data like a string
  //res.sendFile(__dirname +'/index.html') --> __dirname for current directory
  res.render('index.pug') 
})

app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  //res.send(people)
  res.render('person', {people:people})
})

app.get('/person/:id', async(req, res) => {
  const id = req.params.id
  const person = await PersonService.find(id)

  if(person){
    res.send(person)
  }else res.send('Dont have data')
    
})


app.post('/person', async (req,res) =>{
  //console.log(req.body)
  const person = req.body
  
  await PersonService.add(person)
  res.send(person) // return the person which I wrote in console
})

app.delete('/person/:id', async (req,res) =>{
  await PersonService.del(req.params.id)
  res.send('Data was deleted')
})

app.listen(3000, () =>{
  console.log('server listening')
})