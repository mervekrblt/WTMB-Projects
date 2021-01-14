const mongoose=require('mongoose')

const TweetSchema = new mongoose.Schema({
    //with tweet.create function, get autor and text
    autor:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth:1
        }
    },
    text:{
        type:String
        /*
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        autopopulate:{
            select: 'text'
        }*/
    }
    
})

TweetSchema.plugin(require('mongoose-autopopulate'))

const TweetModel=mongoose.model('Tweet',TweetSchema)

module.exports= TweetModel

