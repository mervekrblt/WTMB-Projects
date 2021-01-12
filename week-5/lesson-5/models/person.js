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
    }
})

const PersonModel = mongoose.model('person', PersonSchema)

module.exports = PersonModel
