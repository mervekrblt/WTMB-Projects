const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const personRouter = require('./routes/person')

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/person', personRouter)

app.get('/', (req,res) => {
  //res.send('/.index.html') //send --> any data like a string
  //res.sendFile(__dirname +'/index.html') --> __dirname for current directory
  res.render('index.pug') 
})


app.listen(3000, () =>{
  console.log('server listening')
})