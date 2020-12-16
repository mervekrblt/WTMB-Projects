module.exports =class Meetup {
    constructor(name, attendees=[]) {
        this.name = name
        this.attendees = attendees
    }
    printAttendeeNames(){
        this.attendees.forEach(printName)
    }
    static create({name, attendees}){
        return new Meetup(name, attendees)
    }
}

printName = (person) =>{
    console.log(person.name, person.age)
}