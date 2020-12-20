module.exports = class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    attend(meetup) {
        meetup.attendees.push(this)
    }

    //Add this line to use for creating Person in meetup.js file
    static create({ name, age }) {
        return new Person(name, age)
    }
}
