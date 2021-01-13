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

