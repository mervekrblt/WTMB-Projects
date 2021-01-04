const User = require('./models/user');
const Like = require('./models/like');
const Tweet = require('./models/tweet');
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')


async function main(){
    const merve = new User('Merve', 26)
    await UserService.add(merve)

    const tweet1 = merve.tweet('Hello')
    const tweet2 = merve.tweet('World')

    await TweetService.add(tweet1)
    await TweetService.add(tweet2)

    const tweets = await TweetService.findAll()

    console.log(tweets)
}

main()