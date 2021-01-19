const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const personRouter = require('./routes/person')
const meetupRouter = require('./routes/meetup')

require('./mongo-connection')

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/person', personRouter)
app.use('/meetup', meetupRouter)

app.get('/', (req,res) => {
  res.render('index.pug') 
})


app.listen(3000, () =>{
  console.log('server listening')
})
