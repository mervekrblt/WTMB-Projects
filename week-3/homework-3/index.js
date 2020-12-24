const User = require('./models/user')
const Tweet = require('./models/tweet')
const Like = require('./models/like')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')


async function main() {
    merve = new User('Merve', 'usagi')
    melis = new User('Melis', 'chibiusa')

    await UserService.add(merve)
    await UserService.add(melis)

    const users = await UserService.findAll()
    console.log(users)
    //console.log(users[0].tweet('Hello'))

    const tweet1 = merve.tweet('Hello world')
    const tweet2 = melis.tweet('Hi')
    await TweetService.saveAll(tweet1,tweet2)
    merve.follow(melis)

    const like1 = melis.like(tweet1)
}

main()