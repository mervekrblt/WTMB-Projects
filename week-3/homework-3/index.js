const User = require('./user')
const Tweet = require('./tweet')
const Like = require('./like')
const Database = require('./database')

merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibiusa')

const person=[merve,melis]

merve.follow(melis)
const tweet1 = merve.tweet('Hello world')

const like1 = melis.like(tweet1)

Database.save('user.json', person)

console.log(Database.load('user.json'))