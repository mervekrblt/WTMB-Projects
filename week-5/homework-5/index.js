const express = require('express')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')
const likeService = require('./services/like-service')
const bodyParser = require('body-parser')
/*for database
const User = require('./models/user')
const Tweet = require('./models/tweet')
const Like = require('./models/like')
*/
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

//User
app.get('/user/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('user', {
        users: users
    })
})

app.get('/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.find(id)

    if (user) {
        res.send(user)
    } else res.send('Dont have data')

})

app.post('/user', async (req, res) => {
    const user = req.body

    await UserService.add(user)
    res.send(user)
})

app.delete('/user/:id', async (req, res) => {
    await UserService.del(req.params.id)
    res.send('Data was deleted')
})

//Tweet
app.get('/tweet/all', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.render('tweet', {
        tweets: tweets
    })
})

app.get('/tweet/:id', async (req, res) => {
    const id = req.params.id
    const tweet = await TweetService.find(id)
    res.send(tweet)
})

app.post('/tweet', async (req, res) => {
    const tweet = req.body

    await TweetService.add(tweet)
    res.send(tweet)
})

app.delete('/tweet/:id', async (req, res) => {
    await TweetService.del(req.params.id)
    res.send('Data was deleted')
})


app.listen(3000, 'localhost', () => {
    console.log('server is listening')
})

/* for database
async function main(){
    const merve = new User('merve', 'usagi')
    const melis = new User('melis', 'chibiusa')

     


      const tweet1 = merve.tweet('Hello world')
      const tweet2 = merve.tweet('I love JS')
      const tweet3 = melis.tweet('Hello')
      await TweetService.add(tweet1)
      await TweetService.add(tweet2)
      await TweetService.add(tweet3)
      

     const like1 = melis.like(tweet1)
     const like2 = melis.like(tweet2)
     await LikeService.add(like1)
     await LikeService.add(like2)

     await UserService.add(merve)
     await UserService.add(melis)
}

main()
*/