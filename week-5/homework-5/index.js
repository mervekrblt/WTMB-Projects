const express = require('express')


const LikeService = require('./services/like-service')
const likeService = require('./services/like-service')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

//User router
const userRouter = require('./routes/user')
app.use('/user', userRouter)

//Tweet router
const tweetRouter=require('./routes/tweet')
app.use('/tweet', tweetRouter)



app.listen(3000, 'localhost', () => {
    console.log('server is listening')
})
