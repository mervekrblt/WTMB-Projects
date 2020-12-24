module.exports =class Tweet{
    constructor(user, text, likes =[]){
        this.user =user
        this.text = text
        this.likes = likes
    }
    static create({user, text, likes}){
        return new Tweet(user,text, likes)
    }
}