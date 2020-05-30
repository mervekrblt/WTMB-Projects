const Chalk = require('chalk');

module.exports = class Restaurant{
    constructor(name){
    this.name = name
    this.menu = []  // menu is an array that contains foods
    this.orderlist =[] // access to customer class with ** code
    this.drivers = []  // list of drivers
    this.emoji =[]
    }
    printMenu(){
        console.log(Chalk.blue(`${this.name} Menu`))
        this.menu.forEach(printMenuName)  
    }
}

const printMenuName = function(restaurant){
    console.log(restaurant.name, restaurant.emoji) //print food with its emoji
}

