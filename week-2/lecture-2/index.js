  armagan = new Person("Armagan", 35)
  mert = new Person("Mert", 34)
  

  
  wtmb = new Meetup("Women Techmakers Berlin")
  armagan.attend(wtmb)
  mert.attend(wtmb)
  
  wtmb.printAttendeeNames()