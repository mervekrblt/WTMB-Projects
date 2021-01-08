const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')

router.get('/all', async (req, res) => {
    const people = await PersonService.findAll()
    //res.send(people)
    res.render('person', {
        people: people
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const person = await PersonService.find(id)

    if (person) {
        res.send(person)
    } else res.send('Dont have data')

})


router.post('/', async (req, res) => {
    //console.log(req.body)
    const person = req.body

    await PersonService.add(person)
    res.send(person) // return the person which I wrote in console
})

router.delete('/:id', async (req, res) => {
    await PersonService.del(req.params.id)
    res.send('Data was deleted')
})

module.exports = router