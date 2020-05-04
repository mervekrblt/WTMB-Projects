Person = class {              //person class oluşturduk
    constructor(name,age){    //constructor ile person class ının özeliiklerini belirledik
        this.name = name      //this.name ile class içindeki name özelliğine eriştik ve name özelliğine eşitledik
        this.age= age         //aynı işlemi age için yaptık
    }

    greet(person){            //greet fonksiyonu tanımladık. değişkeni person, person.greet(person)
        console.log(`Hello ${person.name}, my name is ${this.name}.`)
    }

    attend(meetup){           //person.attend(meetup)
        this.meetup = meetup  //meetup classına gider 
        meetup.attendees.push(this)  //attend fonk ile yeni object ekleyebiliriz
    }
}

Meetup = class{               //meetUp class oluşturduk
    constructor(name){
        this.name = name
        this.attendees = [] //meetup.attendess=[] meetup katılanları listeler
    }
    
    printAttendeeNames(){
        this.attendees.forEach(printName)  // arraydeki objenin her biri için print.name foksiyonu yazdırılır.
    }
}

printName = person=> console.log(person.name)  // printname fonksiyonu ile person.name yazdırılır

merve= new Person('merve',25)
melis=new Person ('melis',17)

wtmb = new Meetup('WTMB')

wtmb2= new Meetup('WTMB2')

merve.attend(wtmb)
melis.attend(wtmb)
merve.attend(wtmb2)