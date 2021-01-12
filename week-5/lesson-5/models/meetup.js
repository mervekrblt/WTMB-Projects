const mongoose = require('mongoose')

const MeetupSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 3,
        required: true
    },
    location:{
        type: String,
        required:true
    }
})

const MeetupModel = mongoose.model('meetup', MeetupSchema)

module.exports =MeetupModel