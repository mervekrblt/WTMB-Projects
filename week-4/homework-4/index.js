const express = require('express')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/user/all', async (req,res)=>{
    const users = await UserService.findAll()
    res.render('user', {users:users})
})

app.listen(3000, 'localhost', ()=>{
    console.log('server is listening')
})