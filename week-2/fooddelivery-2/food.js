module.exports = class Food{
    constructor(name, cost, emoji){
        this.name =name
        this.cost =cost
        this.emoji = emoji
    }
    add(restaurant){
        this.restaurant = restaurant.name // clarify the restaurant
        restaurant.menu.push(this)  // I can add foods to restaurant menu by "add" function
        restaurant.emoji.push(this.emoji) // very important, I can add multiple data with one function
}
    }




