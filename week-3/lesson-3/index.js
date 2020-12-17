const Database = require('./database')
const Meetup = require('./meetup')
const Person = require('./person')

console.log(Database.load('person.json'))
const loadedFile = Database.load('meetup.json')
//loadedFile.printAttendeeNames() -->printAttendeeNames is not a function, loaded file doesnt have this method. Because of this, create "static create(){...}" in meetup.js

//create a new instance
const wtmb = Meetup.create(loadedFile)


const merve = new Person('Merve', 26)
merve.attend(wtmb)
Database.save('meetup.json', wtmb)
console.log(loadedFile)

/*
This section is another example of saving data in meetup2.json

const loadedFile2 = Database.load('meetup2.json')
console.log(loadedFile2)
const wtmb2 = Meetup.create(loadedFile2)


const olcay = new Person('olcay', 48)
olcay.attend(wtmb2)



const bektaş = new Person('bektaş', 51)
bektaş.attend(wtmb2)
Database.save('meetup2.json', wtmb2)
wtmb2.printAttendeeNames()
*/