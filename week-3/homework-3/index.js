const User = require('./user')
const Tweet = require('./tweet')
const Like = require('./like')
const Database = require('./database')

merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibiusa')


merve.follow(melis)
const tweet1 = merve.tweet('Hello world')
const like1 = melis.like(tweet1)

const person = [merve,melis]
Database.save('user.json',person)
const loadedFile =Database.load('user.json')
const ayşe= User.create({name:'Ayşe', username:'ayşe'})

 console.log(loadedFile)
 console.log(ayşe)
//Database.save('user.json',people)


