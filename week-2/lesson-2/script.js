// console.log('Hello world')

// const add = (num1, num2) => num1 + num2

// const x =add(4,8)

// console.log(x)

// const multiple = (...arg) => {return arg.reduce((a,b) => a*b)} //multiple arguments

// console.log(multiple(1,5,10))

const Database = require('./database.js')
console.log(Database.load('meetup.json'))
console.log(Database.load('person.json'))