const Database = require('./database')
const Meetup = require('./meetup')
const Person = require('./person')

const loadedFile = Database.load('meetup.json')


//create a new instance
const wtmb = Meetup.create(loadedFile)


const merve = new Person('Merve', 26)
merve.attend(wtmb)
Database.save('meetup.json', wtmb)
console.log(loadedFile)
