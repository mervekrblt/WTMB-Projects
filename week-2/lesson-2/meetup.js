const Chalk = require("chalk")

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
    console.log(Chalk.underline(person.name, person.age))
}