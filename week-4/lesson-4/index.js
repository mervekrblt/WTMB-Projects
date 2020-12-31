const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req,res) => {
  //res.send('/.index.html') //send --> any data like a string
  //res.sendFile(__dirname +'/index.html') --> __dirname for current directory
  res.render('index.pug') 
})

app.listen(3000, () =>{
  console.log('server listening')
})