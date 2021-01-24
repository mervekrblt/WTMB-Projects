import test from 'ava'
import request from 'supertest'
import app from '../app'

test('User can view all tweet', async t =>{
    const merve ={
        name: 'Merve',
        username: 'usagi',
        tweets: [],
        following:[],
        followers:[],
        likes:[]
    }

    const merveCreated = (await request(app)
        .post('/user')
        .send(merve)).body

    const merveTweetText = await request(app)
        .post(`/user/${merveCreated._id}/tweets`)
        .send({text : 'Hello world'})

    //console.log(merveTweetText.body.tweets[0]._id) --> gives tweet id
    const isTweetExist = await request(app)
        .get(`/tweet/${merveTweetText.body.tweets[0]._id}`)
    t.is(isTweetExist.status, 200)

    const res = await request(app).get('/tweet/all')
    t.is(res.status, 200)

    const jsonRes = await request(app).get('/tweet/all/json')
    t.is(jsonRes.status, 200)

    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
    t.true(jsonRes.body.length > 0)
})

test('Delete a tweet', async t =>{
    const userToCreate ={
        name: 'Merve',
        username: 'usagi',
        tweets: [],
        following:[],
        followers:[],
        likes:[]
    }

    const merveCreated = (await request(app)
        .post('/user')
        .send(userToCreate)).body

    const merveTweetText = await request(app)
        .post(`/user/${merveCreated._id}/tweets`)
        .send({text : 'Hello world'})

    const deletedTweet = await request(app)
        .delete(`/tweet/${merveTweetText.body.tweets[0]._id}`)

    //console.log(deletedUser.body) --> { n: 1, ok: 1, deletedCount: 1 }

    t.is(deletedTweet.ok, true)  //deleted

    const fetchDeleted = await request(app)
        .get(`/tweet/${merveTweetText.body.tweets[0]._id}`)

    t.is(fetchDeleted.status, 404) 

    const fetchDeletedJson = await request(app)
        .get(`/tweet/${merveTweetText.body.tweets[0]._id}/json`)

    t.is(fetchDeletedJson.status, 404)
})