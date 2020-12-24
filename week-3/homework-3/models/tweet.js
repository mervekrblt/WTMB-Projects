module.exports =class Tweet{
    constructor(user, text, likes =[]){
        this.creator =user.username
        this.text = text
        this.likes = likes
    }
    static create({user, text, likes}){
        return new Tweet(user,text, likes)
    }
}