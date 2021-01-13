
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

    }]
})

const UserModel = mongoose.model('User',UserSchema)

module.exports=UserModel
