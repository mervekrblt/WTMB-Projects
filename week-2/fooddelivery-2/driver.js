module.exports = class Driver{
    constructor(name){
        this.name = name
    }
    accessInformation(customer){  //driver can get access customer information by this function
        console.log(customer.name, customer.orderlist, customer.adress)
    }
    getHiredBy(restaurant){  // driver can be hired by restaurant 
        this.restaurant=restaurant.name  // add restaurant name into driver information
        restaurant.drivers.push(this) // I can add to driver's information to restaurant.drivers 
    }
}