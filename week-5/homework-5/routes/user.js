const express= require("express")
const router = express.Router()

const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('list', {items: users})
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.find(id)

    res.render('data', { data: user })

})

router.post('/', async (req, res) => {
    const user = req.body

    await UserService.add(user)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    //filter users and delete
    const x =await TweetService.deleteAll({ "author": {
        "_id": req.params.id
    }})
    console.log(x)
    await UserService.del(req.params.id)
    res.send('Data was deleted')
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
