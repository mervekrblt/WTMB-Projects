const Chalk = require('chalk');

module.exports = class Customer{
    constructor(name, adress){
        this.name = name
        this.adress = adress
        this.orderlist= []  // list of customer's orderlist
    }
    order(food, restaurant){
        this.food = food
        restaurant.orderlist.push(this) // ** code
        this.orderlist.push(food) // add food to customer.orderlist by this code
    }
    printOrderList(){
        console.log(Chalk.green(`${this.name}'s Order List`))
        this.orderlist.forEach(printOrder)
    }
}

const printOrder = food => console.log(food.name)