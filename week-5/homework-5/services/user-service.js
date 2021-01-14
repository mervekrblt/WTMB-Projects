const BaseService = require('./base-service')
const UserModel = require('../models/user')
const TweetModel=require('../models/tweet')


class UserService extends BaseService {
    model=UserModel

    async tweetText(user,text){
        //user.tweets.push(text)
        //await user.save()
        //take the text and convert it to tweet model. thus, the text has an id
        const tweet =await TweetModel.create({autor:user, text})
        //then push this tweet to user.tweets. I have to update tweets type etc.
        user.tweets.push(tweet)
        //dont forget saving
        await user.save()
    }
}

module.exports = new UserService()