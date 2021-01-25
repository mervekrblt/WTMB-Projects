const express = require('express')
const router = express.Router()

const MeetupService = require('../services/meetup-service')

router.get('/all', async (req, res) => {
    //await MeetupService.deleteAll({}) -->delete all data 
    const meetups = await MeetupService.findAll()
    res.render('list', {
        items: meetups
    })
})

//add for testing
router.get('/all/json', async (req, res) => {
    const meetup = await MeetupService.findAll()
    res.send(meetup)
})

router.get('/:id', async (req, res) => {
    const meetup = await MeetupService.find(req.params.id)
    if (!meetup) res.status(404)
    res.render('data', {
        data: meetup
    })
})

// add for testing
router.get('/:id/json', async (req, res) => {
    const meetup = await MeetupService.find(req.params.id)
    if (!meetup) res.status(404)
    res.send(meetup)
  })

router.post('/', async (req, res) => {
    const meetup = await MeetupService.add(req.body)
    res.send(meetup)
})

router.delete('/:id', async (req, res) => {
    const meetup = await MeetupService.del(req.params.id)
    res.send(meetup)
})

module.exports = router