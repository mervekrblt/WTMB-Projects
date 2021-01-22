const express = require('express')
const router = express.Router()

const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.render('list', {items: tweets})
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const tweet = await TweetService.find(id)
    res.render('data', { data: tweet })
    console.log(tweet.author)
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