
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
    }]
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User',UserSchema)

module.exports=UserModel
