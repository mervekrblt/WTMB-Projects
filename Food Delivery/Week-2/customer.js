module.exports = class Customer {
    constructor(name, addres,) {
        this.name = name
        this.addres = addres
        this.orders = []
    }
    order(food, restaurant, number) {
        this.orders.push(`${food.name}, ${number}`)
        restaurant.orderList.push(`${this.name} orders ${number} ${food.name}`)
    }
}