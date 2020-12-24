const Tweet = require('./tweet')
const Like = require('./like')


module.exports= class User{
    constructor(name, username, tweets=[],likedTweets=[], following=[],followers=[], id){
        this.name = name
        this.username = username
        this.tweets = tweets
        this.likedTweets =likedTweets
        this.following = following
        this.followers =followers
        this.id=id
    }
    tweet(text){
        const tweet = new Tweet(this,text)
        this.tweets.push(tweet.text) //break circular 
        return tweet
    }
    like(tweet){
        const like = new Like(this, tweet)
        this.likedTweets.push(tweet)
        tweet.likes.push(this.username) //break circular
        return like
    }
    follow(user){
        user.followers.push(this.username)
        this.following.push(user)
    }
    static create({name, username, tweets,likedTweets, following,followers, id}){
        return new User(name, username, tweets,likedTweets, following,followers, id) 
    }
}