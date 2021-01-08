const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const PersonModel = mongoose.model('person', PersonSchema)

module.exports = PersonModel

// module.exports = class Person {
//     constructor(name, age, meetups = [], id) {
//         this.name = name
//         this.age = age
//         this.meetups = meetups
//         this.id = id
//     }

//     attend(meetup) {
//         this.meetups.push(meetup.name)
//         meetup.attendees.push(this)
//     }

//     static create({ name, age, meetups, id }) {
//         return new Person(name, age, meetups, id);
//     }
// }