/*var armagan = {
    name: 'Armagan',
    age: 35,
    greet(person){
        console.log(`Hello ${person.name}, my name is ${this.name}`)
    }
}

var mert ={
    name: 'Mert',
    age: 34
}*/

class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age,
        this.meetups = []
    }

    greet(person) {
        console.log(`Hello ${person.name}, my name is ${this.name}`)
    }
    attend(meetup) {
        //this.meetup=meetup
        //if we want to reach out person.meetup, should write this.meetup = meetup. Otherwise, person.meetup will be undefined
        //this refers to person, thus this meetup means that person.meetup. If write this.meetup = meetup.name. We just see just meetup's name which the person attend

        //changed this.meetup=meetup to this.meetups.push(meetup) because people can attend multiple meetups. Other code just declare one meetup
        this.meetups.push(meetup)
        meetup.attendees.push(this)
    }
}

armagan = new Person('Armagan', 35)
mert = new Person('Mert', 34)

armagan.greet(mert)
mert.greet(armagan)

class Meetup {
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

wtmb = new Meetup('WTMB')

armagan.attend(wtmb)
armagan.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames()