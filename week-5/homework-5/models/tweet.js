  
module.exports =class Tweet{
    constructor(user, text, likes =[],id){
        this.user =user
        this.text = text
        this.likes = likes
        this.id = id
    }
    static create({user, text, likes,id}){
        return new Tweet(user,text, likes,id)
    }
}
