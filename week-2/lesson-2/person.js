module.exports= class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age,
        this.meetups = []
    }
    greet(person) {
        console.log(`Hello ${person.name}, my name is ${this.name}`)
    }
    attend(meetup) {
        this.meetups.push(meetup)
        meetup.attendees.push(this)
    }
}