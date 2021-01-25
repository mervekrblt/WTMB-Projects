const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')
const MeetupService = require('../services/meetup-service')

router.get('/all', async (req, res) => {
    //await PersonService.deleteAll({}) -->delete all data
    const people = await PersonService.findAll()
    res.render('list', {
        items: people
    })
})
//add for testing
router.get('/all/json', async (req, res) => {
    const people = await PersonService.findAll()
    res.send(people)
  })

router.get('/:id', async (req, res) => {
    const user = await PersonService.find(req.params.id)
    if (!user) res.status(404) //add for testing
    res.render('data', {
        data: user
    })
})
// add for testing
router.get('/:id/json', async (req, res) => {
    const user = await PersonService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
  })

router.post('/', async (req, res) => {
    const user = await PersonService.add(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    const user = await PersonService.del(req.params.id)
    res.send(user)
})

router.post('/:id/meetups', async (req, res) => {
    //find user 
    const user = await PersonService.find(req.params.id)
    //fetch the meetup which has the same id
    const meetup = await MeetupService.find(req.body.meetup)
    //define attend function
    await PersonService.attendMeetup(user, meetup)
    res.send(user)
})

//get all the peers of a particular person
router.get('/:id/peers-over-18', async(req,res) =>{
    const user = await PersonService.find(req.params.id)
    const peers = await user.findPeersOver18()
    res.send(peers)
})

module.exports = router