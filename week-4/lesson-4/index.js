const express = require('express')
const PersonService = require('./services/person-service')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req,res) => {
  //res.send('/.index.html') //send --> any data like a string
  //res.sendFile(__dirname +'/index.html') --> __dirname for current directory
  res.render('index.pug') 
})

app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.send(people)
})

app.listen(3000, () =>{
  console.log('server listening')
})