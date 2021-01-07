const express = require('express')
const bodyParser = require('body-parser')
/*
const Person = require('./models/person')
const Meetup = require('./models/meetup')
const MeetupService = require('./services/meetup-service')
const PersonService = require('./services/person-service')
*/
const app = express()

const personRouter = require('./routes/person')
const meetupRouter = require('./routes/meetup')

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/person', personRouter)
app.use('/meetup', meetupRouter)

app.get('/', (req,res) => {
  res.render('index.pug') 
})


app.listen(3000, () =>{
  console.log('server listening')
})
/*
async function main() {
  const mert = new Person('Mert', 33)
  const armagan = new Person('Armagan', 34)
  const merve = new Person ('Merve', 26)

  const wtmb = new Meetup('Women Tech Makers Berlin', 'Eurostaff')
  const wtmb2019 = new Meetup('Women Tech Makers Berlin 2019', 'Berlin')
  armagan.attend(wtmb)
  mert.attend(wtmb)
  merve.attend(wtmb2019)
  

  await PersonService.add(mert)
  await PersonService.add(armagan)
  await PersonService.add(merve)
  await MeetupService.add(wtmb)
  await MeetupService.add(wtmb2019)
}

main()
*/