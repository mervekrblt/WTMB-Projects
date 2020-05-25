const Person = require('./person')
const Meetup = require('./meetup')
printName = person => console.log(person.name)

const mert = new Person ('Mert', 34)
const armagan = new Person ('Armagan', 35)

mert.greet(armagan)
const wtmb = new Meetup('WTM Berlin')
armagan.attend(wtmb)
mert.attend(wtmb)
wtmb.printAttendeeNames()