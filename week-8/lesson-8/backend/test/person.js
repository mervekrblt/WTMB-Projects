import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new person', async t => {
  t.plan(3)
  const personToCreate = {
    name: 'Armagan Amcalar',
    age: 34,
    meetups: []
  }

  const res = await request(app)
    .post('/person')
    .send(personToCreate)

  // checking for server response status success
  t.is(res.status, 200)

  // comparing the created person's data
  t.is(res.body.name, personToCreate.name)
  t.is(res.body.age, personToCreate.age)
})

test('Fetch a person', async t => {
  t.plan(3)
  const personToCreate = {
    name: 'Maria Ovsyannikova',
    age: 25,
    meetups: []
  }

  // first create a person
  const mariaUserCreated = (await request(app)
    .post('/person')
    .send(personToCreate)).body //body --> it also includes _id

  // fetch the person we just created
  const fetchRes = await request(app).get(`/person/${mariaUserCreated._id}`)
  // checking for server response status success
  // this endpoint is rendering into HTML
  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/person/${mariaUserCreated._id}/json`)
  // checking for server response status success
  t.is(fetchResJson.status, 200)

  // this endpoint is responding with the user detail JSON data
  // compare the fetched user with created user
  const mariaUserFetched = fetchResJson.body
  t.deepEqual(mariaUserFetched, mariaUserCreated)
})

test('Delete a person', async t => {
  t.plan(4)

  // first create a person
  const personToCreate = { name: 'Celia Gomez', age: 33, meetups: [] }
  const celiaUserCreated = (await request(app)
    .post('/person')
    .send(personToCreate)).body

  // delete the person
  const deleteRes = await request(app).delete(`/person/${celiaUserCreated._id}`)
  // checking for server response status success
  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  // trying to render the detail page for the deleted user
  const fetch = await request(app).get(`/person/${celiaUserCreated._id}`)
  // checking for server response status - page not found 404
  t.is(fetch.status, 404)

  // trying to fetch the JSON data of the deleted user
  const fetchJson = await request(app).get(`/person/${celiaUserCreated._id}/json`)
  // checking for server response status - page not found 404
  t.is(fetchJson.status, 404)
})

test('Get list of people', async t => {
  t.plan(4)

  // first create a person to ensure that
  // there will be at least 1 user in people's list
  const personToCreate = { name: 'Omur Turan', age: 30, meetups: [] }
  const _ = await request(app)
    .post('/person')
    .send(personToCreate)

  // get the list of people - render view
  const res = await request(app).get('/person/all')
  // checking for server response status success
  t.is(res.status, 200)

  // get the list of people - JSON
  const jsonRes = await request(app).get('/person/all/json')
  // checking for server response status success
  t.is(jsonRes.status, 200)

  // check the response whether it is an array
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  // check the response whether at least there is 1 element
  t.true(jsonRes.body.length > 0)
})

test('User can attend to a meetup', async t =>{
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

  //call route which aplly attend function

  const attendMeetupRes =await request(app).post(`/person/${merveUser._id}/meetups`).send({meetup : createdMeetup._id})

  //checking
  t.is(attendMeetupRes.status, 200)

  //to be sure merve has meetup, merve who has a meetup is not same with merve who has not have a meetup, so use altered
  //getting data with attendMeetupRes.body because attend function return user data (res.send(user))
  const alteredMerve  = attendMeetupRes.body
  t.deepEqual(alteredMerve.meetups[0], createdMeetup) // checked all meetup's data, name, id,location etc

   // check that user has that meetup on their meetups
   t.is(alteredMerve.meetups[0]._id, createdMeetup._id)

  // personAltered is not the same with the first created user
  // createdPerson had no meetups
  // personAltered has the meetup amongst their list of meetups
  t.notDeepEqual(alteredMerve, merveUser)

  // What if meetup doesnt have the same user, you should write test for meetup also
})

