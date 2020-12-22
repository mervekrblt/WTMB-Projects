module.exports =class Like{
    constructor(user, tweet){
        this.user = user.username
        this.likedTweet= tweet.text
    }
    static create(user,tweet){
        return new Like(user,tweet)
    }
}