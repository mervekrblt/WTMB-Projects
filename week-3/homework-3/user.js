const Tweet = require('./tweet')
const Like = require('./like')

module.exports= class User{
    constructor(name, username){
        this.name = name
        this.username = username
        this.tweets = []
        this.likedTweets =[]
        this.following = []
        this.followers =[]
    }
    tweet(text){
        const tweet = new Tweet(this,text)
        this.tweets.push(tweet)
        return tweet
    }
    like(tweet){
        const like = new Like(this, tweet)
        this.likedTweets.push(tweet)
        tweet.likes.push(like)
        return like
    }
    follow(user){
        user.followers.push(this.username)
        this.following.push(user)
    }
}