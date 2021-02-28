const BaseService = require('./base-service')
const UserModel = require('../models/user')
const TweetModel=require('../models/tweet')


class UserService extends BaseService {
    model=UserModel

    async tweetText(user,text){
        const tweet =await TweetModel.create({author:user, text})
        user.tweets.push(tweet)
        await user.save()
    }
    
    async follow(user,person){
        user.following.push(person)
        const anotherUser = await UserModel.findById(person)
        anotherUser.followers.push(user)
        await user.save()
        await anotherUser.save()
        
    }

    async like(user,tweet){
        const likedTweet = await TweetModel.findById(tweet)

        user.likes.push(tweet)
        likedTweet.likes.push(user)

        await user.save()
        await likedTweet.save()
    }
}

module.exports = new UserService()