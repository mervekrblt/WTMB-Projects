const express = require('express')
const tweetService = require('../services/tweet-service')
const router = express.Router()

const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.render('list', {items: tweets})
    
    const deletedTweets = tweets.filter(tweet => tweet.author===null).map(tweet => tweet._id)
    console.log(deletedTweets)
    await deletedTweets.map(tweet => TweetService.del(tweet._id))
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const tweet = await TweetService.find(id)
    res.render('data', { data: tweet })
    console.log(tweet.author)

    if(tweet.author===null){
        await TweetService.del(tweet)
        res.send(404)
    }
})

router.post('/', async (req, res) => {
    const tweet = req.body

    await TweetService.add(tweet)
    res.send(tweet)
})

router.delete('/:id', async (req, res) => {
    await TweetService.del(req.params.id)
    res.send('Data was deleted')
})

module.exports = router