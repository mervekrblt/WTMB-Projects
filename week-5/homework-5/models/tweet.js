const mongoose=require('mongoose')

const TweetSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
        minlength:3
    },
    text:{
        type:String,
        minlength:5
    }
})

const TweetModel=mongoose.model('Tweet',TweetSchema)

module.exports= TweetModel

/*  
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
}*/
