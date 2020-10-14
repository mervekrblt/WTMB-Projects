// Create a node.js project by running npm init
// Split your classes from last week's homework into different files. Export them as modules and require them in your index.js
// Search npmjs.com for a library that could fit to your project.
// Install that library to your project using npm install and require that library in your code.
// Using the database.js module introduced this week, save one or more of your classes into JSON files.
// DO NOT SUBMIT node_modules folder. package.json is sufficient.

const Restaurant = require('./restaurant');
const Food = require('./food');
const Customer = require('./customer');
const Driver = require('./driver');

foodCenter = new Restaurant('Food Center')



pizza = new Food('Pizza', '10 $')
cola = new Food('Cola', '2 $')
kebab = new Food('Kebab', '15 $')

foodCenter.has(pizza)
foodCenter.has(cola)
foodCenter.has(kebab)




merve = new Customer('Merve', 'Ankara')
melis = new Customer('Melis', 'Ankara')

merve.order(cola, foodCenter, 2)
merve.order(pizza, foodCenter, 1)

melis.order(cola, foodCenter, 5)
melis.order(kebab, foodCenter, 2)



ali = new Driver('Ali', foodCenter)
ali.pickUpOrders(merve)
ali.pickUpOrders(melis)

console.log(merve)