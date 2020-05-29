Restaurant = class{
    constructor(name){
    this.name = name
    this.menu = []  // menu is an array that contains foods
    this.orderlist =[] // access to customer class with ** code
    this.drivers = []  // list of drivers
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
        this.orderlist= []  // list of customer's orderlist
    }
    order(food, restaurant){
        this.food = food
        restaurant.orderlist.push(this) // ** code
        this.orderlist.push(food.name) // add food.name to customer.orderlist by this code
    }
}

merve = new Customer('Merve', 'Ankara')

Driver = class {
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

ali = new Driver ('Ali')
ali.getHiredBy(abc)
pizza.add(abc)
merve.order(pizza,abc)
merve.order(hamburger,abc)