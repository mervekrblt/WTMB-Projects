const User = require('./models/user')
const Tweet = require('./models/tweet')
const Like = require('./models/like')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')
const userService = require('./services/user-service')

// add function adds id for objects. Dont need to add id with default, but you should use add function.
async function main() {
    const merve = new User('merve', 'usagi')
    const melis = new User('melis', 'chibiusa')

    // await UserService.add(merve)
    // await UserService.add(melis)
    const users = await UserService.findAll()

    //  const tweet1 = merve.tweet('Hello world')
    //  const tweet2 = merve.tweet('I love JS')
    //  await TweetService.add(tweet1)
    //  await TweetService.add(tweet2)
    const tweets = await TweetService.findAll()
    //console.log(tweets)

    // const like1 = melis.like(tweet1)
    // const like2 = melis.like(tweet2)
    // await LikeService.add(like1)
    // await LikeService.add(like2)
    const likes = await LikeService.findAll()
    //console.log(likes)

    //example for deleting
    await LikeService.del(1)
    const likesdel =  await LikeService.findAll()

    console.log(likesdel)

    //example of working static create function. user1 isnt object, it is a class, so you can use tweet functionality
    const user1 =await UserService.find(1)
    console.log(user1.tweet('Merhaba'))
}

main()