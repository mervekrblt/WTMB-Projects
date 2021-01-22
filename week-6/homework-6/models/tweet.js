const mongoose=require('mongoose')

const TweetSchema = new mongoose.Schema({
    //with tweet.create function, get autor and text
    author:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth: 1,
            select: 'username',
            select: '_id'      
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
    },
    likes:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        autopopulate:{
            select: 'username',
            maxDepth:1,
        }
    }]
    
})

TweetSchema.plugin(require('mongoose-autopopulate'))

const TweetModel=mongoose.model('Tweet',TweetSchema)

module.exports= TweetModel

