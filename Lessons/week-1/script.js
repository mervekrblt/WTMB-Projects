class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(person){
        console.log(`Hello ${person.name}, my name is ${this.name}`)
    }

    attend(meetup){
        meetup.attendees.push(this)
    }
}

merve = new Person('Merve', 25)
melis = new Person('Melis', 18)

merve.greet(melis)


class MeetUp{
    constructor(name){
        this.name = name
        this.attendees = []
    }

    printAttendeeNames(){
        this.attendees.forEach(printName)
    }
}

printName = person => console.log(person.name)

wtmb = new MeetUp('Woman Techmakers Berlin')

merve.attend(wtmb)
melis.attend(wtmb)

wtmb.printAttendeeNames()