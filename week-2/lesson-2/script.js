// console.log('Hello world')

// const add = (num1, num2) => num1 + num2

// const x =add(4,8)

// console.log(x)

// const multiple = (...arg) => {return arg.reduce((a,b) => a*b)} //multiple arguments

// console.log(multiple(1,5,10))

const Person = require('./person.js')
const Meetup = require('./meetup.js');


const mert = new Person('Mert', 34)
const armagan = new Person('Armagan', 35)

mert.greet(armagan)
armagan.greet(mert)

const wtmb = new Meetup('WTM Berlin')

armagan.attend(wtmb)
mert.attend(wtmb)
wtmb.printAttendeeNames()