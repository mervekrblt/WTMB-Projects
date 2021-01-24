const express= require("express")
const router = express.Router()

const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('list', {items: users})
})

router.get('/all/json', async (req, res) => {
    const user = await UserService.findAll()
    res.send(user)
})

router.get('/:id', async (req, res) => {
    const user = await UserService.find(req.params.id)
    if (!user) res.status(404)
    res.render('data', { data: user })
})

router.get('/:id/json', async (req, res) => {
    const user = await UserService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
  })

router.post('/', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    //filter users and delete
    await TweetService.deleteAll({ "author": {
        "_id": req.params.id
    }})
    const user = await UserService.del(req.params.id)
    res.send(user)
})

router.post('/:id/tweets', async(req,res)=>{
    //find the user
    const user = await UserService.find(req.params.id)
    //fetch the text
    const { text } = req.body
    //create a function
    await UserService.tweetText(user,text)
    res.send(user)
})

router.post('/:id/follow', async(req,res)=>{
    //find the user
    const user = await UserService.find(req.params.id)
    //fetch the id of following person
    const person = req.body.person
    //create a function 
    await UserService.follow(user,person)
    res.send(user)
})

router.post('/:id/likes', async(req,res) =>{
    const user = await UserService.find(req.params.id)
    const tweet = req.body.tweet
    await UserService.like(user,tweet)
    res.send(user)
})

module.exports = router
