
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true
    },
    username:{
        type:String,
        minlength:3,
        required:true
    },
    tweets:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweet',
        autopopulate:{
            //select: 'text', 
            //I see id of autor and tweet also I see the text
            maxDepth:1
        }
    }],
    following:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate:{
            select: 'username',
            maxDepth:1
        }
        
    }],
    followers:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate:{
            select: 'username',
            maxDepth:1
        }
        
    }],
    likes:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Tweet',
        autopopulate:{
            select: 'text',
            maxDepth:1,
        }
    }]
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User',UserSchema)

module.exports=UserModel
