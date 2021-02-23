import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new meetup', async t => {
    t.plan(4)
    //data for meetup
    const meetupToCreate = {
        name: 'wtmb',
        location: 'germany',
        attendees: []
    }

    //create meetup with url
    const res = await request(app)
        .post('/meetup')
        .send(meetupToCreate)

    //checking for server response status success
    t.is(res.status, 200)
    t.is(res.body.name, meetupToCreate.name)
    t.is(res.body.location, meetupToCreate.location)
    t.deepEqual(res.body.attendees, meetupToCreate.attendees)
})

test('Fetch a meetup', async t => {
    const meetupToCreate = {
        name: 'wtmb',
        location: 'germany',
        attendees: []
    }

    //for response
    const aMeetupCreated = (await request(app) //dont forget (await...).body
        .post('/meetup')
        .send(meetupToCreate)).body

    //fetch meetup with its id
    const fetchRes = await request(app).get(`/meetup/${aMeetupCreated._id}`)

    t.is(fetchRes.status, 200)

    //for json
    const fetchResJson = await request(app)
        .get(`/meetup/${aMeetupCreated._id}/json`)

    t.is(fetchResJson.status, 200)

    const aMeetupFetched = fetchResJson.body
    t.deepEqual(aMeetupFetched, aMeetupCreated)
})

test('Delete a meetup', async t => {
    //data
    const meetupToCreate = {
        name: 'wtmb',
        location: 'germany',
        attendees: []
    }

    //create meetup and get its body
    const aMeetupCreated = (await request(app)
        .post('/meetup')
        .send(meetupToCreate)).body

    //delete the meetup
    const deleteRes = await request(app).delete(`/meetup/${aMeetupCreated._id}`)

    // checking for server response status success
    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)

    //tying to fetch deleted meetup and getting 404
    const fetch = await request(app).get(`/meetup/${aMeetupCreated._id}`)
    t.is(fetch.status, 404)

    //tying to fetch deleted meetup json and getting 404
    const fetchJson = await request(app).get(`/meetup/${aMeetupCreated._id}/json`)
    t.is(fetchJson.status, 404)
})

test('Get list of meetup', async t => {
    //data
    const meetupToCreate = {
        name: 'wtmb',
        location: 'germany',
        attendees: []
    }

    //create meetup and get its body
    const aMeetupCreated = (await request(app)
        .post('/meetup')
        .send(meetupToCreate))

    // get the list of meetup - render view
    const res = await request(app).get('/meetup/all')
    t.is(res.status, 200)

    // get the list of people - JSON
    const jsonRes = await request(app).get('/meetup/all/json')
    // checking for server response status success
    t.is(jsonRes.status, 200)

    // check the response whether it is an array
    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
    // check the response whether at least there is 1 element
    t.true(jsonRes.body.length > 0)
})
/*
test('Meetup has attendees', async t =>{
     //user and meetup data
    const merve ={name: 'Merve', age: 26, meetuops: []}
    const meetup = {name:'wtmb', location:'ankara', attendees: []}

    //create user, createMerveRes is a response of request, includes lots of information
    const createMerveRes = await request(app).post('/person').send(merve)

    //need body of response to reach informations that I need
    const merveUser = createMerveRes.body
  
    //create meetup
    const createMeetupRes =await request(app).post('/meetup').send(meetup)
    const createdMeetup = createMeetupRes.body
})
*/