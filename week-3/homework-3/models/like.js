module.exports =class Like{
    constructor(user, tweet){
        this.user = user
        this.tweet= tweet
    }
    static create({user,tweet}){
        return new Like(user,tweet)
    }
}