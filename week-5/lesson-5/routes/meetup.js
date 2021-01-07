const express = require('express')
const router = express.Router()

const MeetupService = require('../services/meetup-service')

router.get('/all', async(req,res)=>{
    const meetups = await MeetupService.findAll()
    res.render('meetup', {meetups:meetups})
})

router.get('/:id', async(req,res)=>{
    const id = req.params.id
    const meetup = await MeetupService.find(id)
    res.send(meetup)
})

router.post('', async(req,res) =>{
    const meetup = req.body

    await MeetupService.add(meetup)
    res.send(meetup)
})

router.delete('/:id', async(req,res)=>{
    const id = req.params.id
    await MeetupService.del(id)
    res.send('Data was deleted')
})

module.exports = router