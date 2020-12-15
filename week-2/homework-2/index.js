const Database = require('./database')

console.log(Database.load('user.json')[0].tweets[0].likes)
console.log(Database.load('tweet.json'))