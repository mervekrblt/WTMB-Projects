  const Person = require('./person')
  const Meetup = require('./meetup')
  const Chalk = require('chalk')
  const Database = require('./database')

  const armagan = new Person("Armagan", 35)
  const mert = new Person("Mert", 34)
  
  console.log(Chalk.blue('Hello world'))
  mert.greet(armagan)
  
  const wtmb = new Meetup("Women Techmakers Berlin")
  armagan.attend(wtmb)
  mert.attend(wtmb)
  
  wtmb.printAttendeeNames()

  Database.save('meetup.json', wtmb)
  Database.save('person.json', mert)
  Database.save('person.json', armagan)
  

  const loadedFile = Database.load('meetup.json')
  console.log(loadedFile.name)