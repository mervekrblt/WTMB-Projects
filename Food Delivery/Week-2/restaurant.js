module.exports = class Restaurant {
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