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
        ref: 'Meetup',
        autopopulate:{
            maxDepth:1
        }
    }]
})

//get all the peers of a particular person
PersonSchema.methods.findPeersOver18 = function(){
    return PersonModel.find({
        age:{
           $gt: 18
        }
    })
}

/*
PersonSchema.methods.attend = async function(meetup){
    this.meetups.push(meetup)
    meetup.attendees.push(this)
    //have to save it
    await this.save()
    await meetup.save()
}
*/

PersonSchema.plugin(require('mongoose-autopopulate'))

const PersonModel = mongoose.model('Person', PersonSchema)

module.exports = PersonModel
