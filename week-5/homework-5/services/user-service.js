const BaseService = require('./base-service')
const UserModel = require('../models/user')
const TweetModel=require('../models/tweet')


class UserService extends BaseService {
    model=UserModel

    async tweetText(user,text){
        //user.tweets.push(text)
        //await user.save()
        //take the text and convert it to tweet model. thus, the text has an id
        const tweet =await TweetModel.create({author:user, text})
        //then push this tweet to user.tweets. I have to update tweets type etc.
        user.tweets.push(tweet)
        //dont forget saving
        await user.save()
    }
    async follow(user,person){
        //console.log(user)--> the user who follow the person
        //console.log(person)--> id of person
        //push id of person into user following array
        user.following.push(person)
        //find the user based on its id
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