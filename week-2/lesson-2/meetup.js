module.exports = class Meetup {
    constructor(name) {
        this.name = name
        this.attendees = []
    }
    printAttendeeNames(){
        //Dont write printName(), write printName
        this.attendees.forEach(printName)
    }
}

printName = (person) =>{
    console.log(person.name, person.age)
}