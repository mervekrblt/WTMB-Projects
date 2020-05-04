// classes = restaurant, food, customer, food 
//interactions 
// 1) a restaurant has a lot of food that the customer can order
// 2) a customer can order food
// 3) the driver picks up the foods from the restaurant and delivers it to the customer

Restaurant = class{
    constructor(name, menu){
    this.name = name
    this.menu = []  // menu is an array that contains foods
    }
}

abc = new Restaurant('ABC')

Food = class{
    constructor(name, cost){
        this.name =name
        this.cost =cost
        this.list = []  //list of food
    }
    add(restaurant){
        this.restaurant = restaurant
        restaurant.menu.push(this)  // I can add foods to restaurant by add functıon
    }
}

pizza = new Food ('Pizza', '25 TL')
hamburger = new Food ('Hamburger', '35 TL')