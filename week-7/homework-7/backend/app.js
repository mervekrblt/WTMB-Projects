const express = require('express')

const bodyParser = require('body-parser')

const app = express()

require('./mongo-connection')

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/index', (req, res) => {
    const view = 'index.pug'
    res.render(view)
})

app.get('/', (req, res) => {
    const view = 'index.pug'
    res.render(view)
})

//User router
const userRouter = require('./routes/user')
app.use('/user', userRouter)

//Tweet router
const tweetRouter=require('./routes/tweet')
app.use('/tweet', tweetRouter)

module.exports=app