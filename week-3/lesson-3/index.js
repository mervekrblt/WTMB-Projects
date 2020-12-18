const Database = require('./database')
const Meetup = require('./meetup')
const Person = require('./person')

Database.load('meetup.json', (err, loadedFile) => {
    console.log('hello')

    const wtmb = Meetup.create(loadedFile)
    wtmb.printAttendeeNames()
})

console.log('Is it first')


//loadedFile.printAttendeeNames() -->printAttendeeNames is not a function, loaded file doesnt have this method. Because of this, create "static create(){...}" in meetup.js


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