const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')

const loadedFile = Database.load()
const meetup = Meetup.create(loadedFile)

//Create another meetup and 
const wayfairMeetup = new Meetup('Wayfair', 'Location')



const merve = new Person('Merve', 26)
const melis = new Person('Melis', 26)

merve.attend(wayfairMeetup)
melis.attend(meetup)

Database.save({meetup, wayfairMeetup})
wayfairMeetup.report()
meetup.report()