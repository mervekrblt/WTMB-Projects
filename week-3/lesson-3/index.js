const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')

armagan = new Person('Armagan', 35)
mert = new Person('Mert', 34)

armagan.greet(mert)
mert.greet(armagan)



wtmb = new Meetup('WTMB')

armagan.attend(wtmb)
armagan.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames()

const people = [armagan, mert]

Database.save('person.json', people)
Database.save('meetup.json', wtmb)

const loadedFile = Database.load('meetup.json')
console.log(loadedFile)