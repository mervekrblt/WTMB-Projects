module.exports =class Tweet{
    constructor(user, text){
        this.creator =user.username
        this.text = text
        this.likes = []
    }
    static create(user, text){
        return new Tweet(user,text)
    }
}