// Create a node.js project by running npm init
// Split your classes from last week's homework into different files. Export them as modules and require them in your index.js
// Search npmjs.com for a library that could fit to your project.
// Install that library to your project using npm install and require that library in your code.
// Using the database.js module introduced this week, save one or more of your classes into JSON files.
// DO NOT SUBMIT node_modules folder. package.json is sufficient.

// const Restaurant = require('./restaurant');
// const Food = require('./food');
// const Customer = require('./customer');
// const Driver = require('./driver');
// const emoji = require('node-emoji');
 const Database = require('./database');

// foodCenter = new Restaurant('Food Center')

// const colaImg = emoji.get('tropical_drink')
// const pizzaImg = emoji.get('pizza')
// const hamburgerImg = emoji.get('hamburger')


// pizza = new Food('Pizza', '10 $', pizzaImg)
// cola = new Food('Cola', '2 $', colaImg)
// hamburger = new Food('Hamburger', '15 $', hamburgerImg)

// foodCenter.has(pizza)
// foodCenter.has(cola)
// foodCenter.has(hamburger)




// merve = new Customer('Merve', 'Ankara')
// melis = new Customer('Melis', 'Ankara')

// merve.order(cola, foodCenter, 2)
// merve.order(pizza, foodCenter, 1)

// melis.order(cola, foodCenter, 5)
// melis.order(hamburger, foodCenter, 2)



// ali = new Driver('Ali', foodCenter)
// ali.pickUpOrders(merve)
// ali.pickUpOrders(melis)


// const customers = [merve, melis]
// const restaurants = [foodCenter]
// const foods = [pizza, cola, hamburger]
// const drivers = [ali]

// Database.save('customer.json', customers)
// Database.save('restaurants.json', restaurants)
// Database.save('foods.json', foods)
// Database.save('drivers.json', drivers)

const loadedFie = Database.load('customer.json')
console.log(loadedFie)
