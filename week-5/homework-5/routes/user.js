const express= require("express")
const router = express.Router()

const UserService = require('../services/user-service')

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
    await UserService.del(req.params.id)
    res.send('Data was deleted')
})

module.exports = router
