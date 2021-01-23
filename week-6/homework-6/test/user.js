import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new user', async t =>{

    const userToCreate ={
        name: 'Merve',
        username: 'usagi',
        tweets: [],
        following: [],
        followers: [],
        likes: []

    }

    const res = await request(app)
        .post('/user')
        .send(userToCreate)

    t.is(res.status,200)
    t.is(res.body.name, userToCreate.name)
    t.is(res.body.username, userToCreate.username)
    t.deepEqual(res.body.tweets, userToCreate.tweets)
    t.deepEqual(res.body.following, userToCreate.following)
})

test('Fetch a user', async t => {
    const userToCreate ={
        name: 'Merve',
        username: 'usagi',
        tweets: [],
        following:[],
        followers:[],
        likes:[]
    }

    const aUserCreated = (await request(app)
        .post('/user')
        .send(userToCreate)).body

    const fetchRes = await request(app)
        .get(`/user/${aUserCreated._id}`)
    
    t.is(fetchRes.status, 200)

    const fetchResJson = await request(app).get(`/user/${aUserCreated._id}/json`)
    t.is(fetchResJson.status, 200)
    t.deepEqual(fetchResJson.body, aUserCreated)
})