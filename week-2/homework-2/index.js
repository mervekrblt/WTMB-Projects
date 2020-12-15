const User = require('./user')
const Like = require('./like')
const Tweet = require('./tweet')
const Database = require('./database')


merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibiusa')

merve.follow(melis)
const tweet1 = merve.tweet('Hello world')
const tweet2 = merve.tweet('I love JS')
const tweet3 = melis.tweet('Hi')

const like1 = melis.like(tweet1)

console.log(melis)
console.log(like1)
console.log(tweet1)

const users = [merve, melis]
const tweets = [tweet1, tweet2, tweet3]
const likes = [like1]

Database.save('user.json', users)
Database.save('tweet.json', tweets)
Database.save('like.json', likes)

console.log(Database.load('user.json'))