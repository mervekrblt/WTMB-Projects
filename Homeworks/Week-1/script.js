// classes = restaurant, food, customer, driver

// a Restaurant has a lot of Food that the Customer can order
// a Customer can order Food
// the Driver picks up the Food’s from the Restaurant and delivers it to the Customer

class Restaurant {
    constructor(name) {
        this.name = name
        this.menu = []
        this.orderList = []
        
    }
    has(food) {
        this.menu.push(food)
    }
    printMenu() {
        this.menu.forEach(printName)
    }
}

printName = item => console.table(item.name)

foodCenter = new Restaurant('Food Center')

class Food {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

pizza = new Food('Pizza', '10 $')
cola = new Food('Cola', '2 $')
kebab = new Food('Kebab', '15 $')

foodCenter.has(pizza)
foodCenter.has(cola)
foodCenter.has(kebab)

class Customer {
    constructor(name, addres,) {
        this.name = name
        this.addres = addres
        this.orders = []
    }
    order(food, restaurant, number) {
        this.orders.push(food.name)
        restaurant.orderList.push(`${this.name} orders ${number} ${food.name}`)
    }
}


merve = new Customer('Merve', 'Ankara')
melis = new Customer('Melis', 'Ankara')

merve.order(cola, foodCenter, 2)
merve.order(pizza, foodCenter, 1)

melis.order(cola, foodCenter, 5)
melis.order(kebab, foodCenter, 2)
