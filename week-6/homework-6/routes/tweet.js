const express = require('express')
const router = express.Router()

const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.render('list', {items: tweets})
})

router.get('/all/json', async (req, res) => {
    const tweet = await TweetService.findAll()
    res.send(tweet)
})

router.get('/:id', async (req, res) => {
    const tweet = await TweetService.find(req.params.id)
    res.render('data', { data: tweet })
    //console.log(tweet.author)
})

router.get('/:id/json', async (req, res) => {
    const tweet = await TweetService.find(req.params.id)
    if (!tweet) res.status(404)
    res.send(tweet)
  })

router.post('/', async (req, res) => {
    //const tweet = req.body

    await TweetService.add(req.body)
    res.send(tweet)
})

router.delete('/:id', async (req, res) => {
    const tweet = await TweetService.del(req.params.id)
    res.send(tweet)
})

module.exports = router