const User = require('./models/user')
const Tweet = require('./models/tweet')
const Like = require('./models/like')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')
const userService = require('./services/user-service')


async function main() {
    /*merve = new User('Merve', 'usagi')
    melis = new User('Melis', 'chibiusa')

    await UserService.add(merve)
    await UserService.add(melis)

    const tweet1 =merve.tweet('hello')
    await TweetService.add(tweet1)
    */
    const twt = await TweetService.findAll()
    console.log(twt)
    await TweetService.del(1)
    /*
    const like1 =melis.like(tweet1)
    await LikeService.add(like1)
    const likes = await LikeService.findAll()
    

    const olcay = new User('olcay', 'olcay')
    await UserService.add(olcay)
    const users = await UserService.findAll()
    console.log(users)
    userService.del(1)
    */
}

main()