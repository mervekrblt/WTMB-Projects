import test from 'ava'
import request from 'supertest'
import app, { response } from '../app'

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

test('Delete a user', async t =>{
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

    const deletedUser = await request(app)
        .delete(`/user/${aUserCreated._id}`)

    //console.log(deletedUser.body) --> { n: 1, ok: 1, deletedCount: 1 }

    t.is(deletedUser.ok, true)  //deleted

    //check whether the user was deleted or not
    const fetchDeleted = await request(app)
        .get(`/user/${aUserCreated._id}`)
    //console.log(fetchDeleted.body) --> {}

    t.is(fetchDeleted.status, 404) //--> for 404, add error handler in get request

    const fetchDeletedJson = await request(app)
        .get(`/user/${aUserCreated._id}/json`)

    t.is(fetchDeletedJson.status, 404)
})

test('User can tweet a text', async t =>{
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
    //console.log(merveTweetText.status) --> gives 200
    //console.log(merveTweetText.body) --> show all user properties like tweets, username etc.
    t.is(merveTweetText.status, 200)

    //console.log(merveTweetText.body.tweets[0]._id) --> gives tweet id
    const isTweetExist = await request(app)
        .get(`/tweet/${merveTweetText.body.tweets[0]._id}`)
    t.is(isTweetExist.status, 200)
    
    const tweetJson =await request(app)
    .get(`/tweet/${merveTweetText.body.tweets[0]._id}/json`)
    //console.log(tweetJson.body) --> gives tweet body
    //console.log(merveTweetText.body.tweets[0]) --> gives user's tweet body

    t.deepEqual(tweetJson.body._id, merveTweetText.body.tweets[0]._id)
})

test('User can follow another user', async t =>{
    const merve ={
        name: 'Merve',
        username: 'usagi',
        tweets: [],
        following:[],
        followers:[],
        likes:[]
    }

    const melis ={
        name: 'Melis',
        username: 'chibi',
        tweets: [],
        following:[],
        followers:[],
        likes:[]
    }

    const merveCreated = (await request(app)
        .post('/user')
        .send(merve)).body

        const melisCreated = (await request(app)
        .post('/user')
        .send(melis)).body
    
    const userFollowRes = await request(app)
        .post(`/user/${merveCreated._id}/follow`)
        .send({person : `${melisCreated._id}`})
    //console.log(userFollowRes.body.following[0]._id)
    t.is(userFollowRes.status, 200)

    const findFollower = await request(app)
        .get(`/user/${userFollowRes.body.following[0]._id}/json`)

    //console.log(findFollower.body.followers[0]._id)
    //console.log(merveCreated._id)
    t.is(findFollower.body.followers[0]._id, merveCreated._id)
    
})

test('User can like a tweet', async t =>{
    const merve ={
        name: 'Merve',
        username: 'usagi',
        tweets: [],
        following:[],
        followers:[],
        likes:[]
    }

    const melis ={
        name: 'Melis',
        username: 'chibi',
        tweets: [],
        following:[],
        followers:[],
        likes:[]
    }

    const merveCreated = (await request(app)
        .post('/user')
        .send(merve)).body

    const melisCreated = (await request(app)
        .post('/user')
        .send(melis)).body

    const merveTweetText = await request(app)
        .post(`/user/${merveCreated._id}/tweets`)
        .send({text : 'Hello world'})

    const melisLikesTweet = await request(app)
        .post(`/user/${melisCreated._id}/likes`)
        .send({tweet :`${merveTweetText.body.tweets[0]._id}`})

    //console.log(melisLikesTweet.body.likes[0]._id)
    //console.log(merveTweetText.body.tweets[0]._id)
    t.is(melisLikesTweet.body.likes[0]._id, merveTweetText.body.tweets[0]._id)
})

test('Get list of user', async t => {
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
        .send(merve))

    const res = await request(app).get('/user/all')
    t.is(res.status, 200)

    const jsonRes = await request(app).get('/user/all/json')
    t.is(jsonRes.status, 200)

    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
    t.true(jsonRes.body.length > 0)
})