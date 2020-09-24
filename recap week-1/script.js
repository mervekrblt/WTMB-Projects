Person = class{
    constructor(name,age){
        this.name = name
        this.age = age
    }
// greet is a function
    greet(Person){
        console.log(`Hello ${Person.name}, my name is ${this.name}`)
    }
}

merve = new Person('Merve', 25)
melis = new Person('Melis', 18)

merve.greet(melis)