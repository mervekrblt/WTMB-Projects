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
    },
    attendees:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Person',
        autopopulate:{
            maxDepth:1
        }
    }]
})

MeetupSchema.plugin(require('mongoose-autopopulate'))

const MeetupModel = mongoose.model('Meetup', MeetupSchema)

module.exports =MeetupModel