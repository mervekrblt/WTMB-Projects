const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength:3
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    meetups: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Meetup'
    }]
})

PersonSchema.methods.attend = async function(meetup){
    this.meetups.push(meetup)
    //have to save it
    await this.save()
}

const PersonModel = mongoose.model('Person', PersonSchema)

module.exports = PersonModel
