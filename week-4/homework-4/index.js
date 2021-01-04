const express = require('express')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')
const likeService = require('./services/like-service')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/user/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('user', {
        users: users
    })
})

app.get('/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.find(id)

    if (user) {
        res.send(user)
    } else res.send('Dont have data')

})

app.get('/tweet/all', async(req,res) => {
    const tweets = await TweetService.findAll()
    res.render('tweet', {
        tweets: tweets
    })
})

app.get('/like/all', async(req,res) => {
    const likes = await likeService.findAll()
    res.render('like', {
        likes: likes
    })
})

app.listen(3000, 'localhost', () => {
    console.log('server is listening')
})