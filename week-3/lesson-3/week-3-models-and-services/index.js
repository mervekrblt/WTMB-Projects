const Person = require('./models/person')
const Meetup = require('./models/meetup')
const PersonService = require('./services/person-service')
const MeetupService = require('./services/meetup-service')

console.log('Hello World!')

async function main() {
  /*const mert = new Person('Mert', 33)
  const armagan = new Person('Armagan', 34)

  const wtmb = new Meetup('Women Tech Makers Berlin', 'Eurostaff')
  armagan.attend(wtmb)
  mert.attend(wtmb)
  wtmb.report()
  


  //I added those things
  const merve = new Person('Merve', 26)
  const meetup2 = new Meetup('Meetup2', 'location')
  merve.attend(meetup2)
  armagan.attend(meetup2)
  meetup2.report()
  await PersonService.add(merve)
  await MeetupService.add(wtmb)
  await MeetupService.add(meetup2)
    //I added those things



  await PersonService.add(mert)
  await PersonService.add(armagan)
  */
  const people = await PersonService.findAll()//find all people

  //console.log(people) //show all people

  //await PersonService.del(1)//delete first person

  //const newPeople = await PersonService.findAll()//find all people after deleting operation 

  //console.log(newPeople)//show all people after deleting operation

  const x =await  MeetupService.find(1)
  console.log(x)
}

main()
