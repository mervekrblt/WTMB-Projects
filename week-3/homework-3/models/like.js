module.exports =class Like{
    constructor(user, tweet, id){
        this.user = user
        this.tweet= tweet
        this.id = id
    }
    static create({user,tweet,id}){
        return new Like(user,tweet,id)
    }
}