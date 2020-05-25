module.exports = class Meetup{
    constructor(name) {
      this.name = name
      this.attendees = []
    }
    printAttendeeNames() {
      this.attendees.forEach(printName)
    }
  }