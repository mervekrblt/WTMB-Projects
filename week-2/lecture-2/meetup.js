const Chalk = require('chalk') //important otherwise get error chalk isnt defined

module.exports= class Meetup {
    constructor(name) {
      this.name = name
      this.attendees = []
    }
    printAttendeeNames() {
      this.attendees.forEach(printName)
    }
  }
  
  printName = person => console.log(Chalk.bgRed(person.name))