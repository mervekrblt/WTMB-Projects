// classes = restaurant, food, customer, food 
//interactions 
// 1) a restaurant has a lot of food that the customer can order
// 2) a customer can order food
// 3) the driver picks up the foods from the restaurant and delivers it to the customer

Restaurant = class{
    constructor(name, menu){
    this.name = name
    this.menu = []  // menu is an array that contains foods
    this.orderlist =[] // access to customer class with ** code
    }
}

abc = new Restaurant('ABC') //abc is a restaurant

Food = class{
    constructor(name, cost){
        this.name =name
        this.cost =cost
    }
    add(restaurant){
        this.restaurant = restaurant.name // clarify the restaurant
        restaurant.menu.push(this)  // I can add foods to restaurant menu by "add" functıon
    }
}

pizza = new Food ('Pizza', '25 TL')
hamburger = new Food ('Hamburger', '35 TL')
croissant = new Food ('Croissant', '8 TL')

Customer = class{
    constructor(name, adress){
        this.name = name
        this.adress = adress
        this.orderlist= []  // list of customers orderlist
    }
    order(food, restaurant){
        this.food = food
        restaurant.orderlist.push(this) // ** code
        this.orderlist.push(food) // add foods to customer.orderlist
    }
}

merve = new Customer('Merve', 'Ankara')