const express = require('express')

const app = express()

app.get('/', (req,res) => {
  //res.send('/.index.html') //send --> any data like a string
  res.sendFile('C:/Users/PC/Desktop/WTMB-Projects/week-4/lesson-4/index.html')
})

app.listen(3000, () =>{
  console.log('server listening')
})