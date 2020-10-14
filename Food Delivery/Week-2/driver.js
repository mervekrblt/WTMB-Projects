module.exports = class Driver{
    constructor(name, restaurant){
        this.name = name
        this.restaurant = restaurant.name
        this.package = []
    }
    pickUpOrders(customer){
        this.package.push(`${customer.name}, ${customer.addres} : ${customer.orders}` )
    }
}