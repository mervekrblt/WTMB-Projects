//const chalk = require('chalk')

// console.log('hello world')

// const add = (num1, num2) => num1 + num2

// const result = add(4,5)

// console.log(result)
//console.log(chalk.bold.magenta('<3 the end <3'))
const Person = require('./person');
const Database = require('./Database');


merve = new Person('Merve', 25)
melis = new Person('Melis', 18)

const people = [merve, melis]

Database.save(people)

const loadedFile = Database.load()

console.log(loadedFile)