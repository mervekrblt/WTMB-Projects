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

    const tweet1 =merve.tweet('hello')
    await TweetService.add(tweet1)
    const twt = await TweetService.findAll()
    console.log(twt)
}

main()