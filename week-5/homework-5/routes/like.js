const express = require('express')
const router = express.Router()

const LikeService = require('../services/like-service')

router.get('/all', async (req, res) => {
    const likes = await LikeService.findAll()
    res.render('list', {items: likes})
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const like = await LikeService.find(id)
    res.render('data', { data: like })
})

router.post('/', async (req, res) => {
    const like = req.body

    await LikeService.add(like)
    res.send(like)
})

router.delete('/:id', async (req, res) => {
    await LikeService.del(req.params.id)
    res.send('Data was deleted')
})

module.exports = router