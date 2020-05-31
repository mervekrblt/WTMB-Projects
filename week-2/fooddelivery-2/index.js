const Customer = require('./customer')
const Driver = require('./driver')
const Food = require('./food')
const Restaurant = require('./restaurant')
const Emoji = require('node-emoji')
const Database = require('./database')

abc = new Restaurant('ABC') //abc is a restaurant
def = new Restaurant('DEF') //def is a restaurant

const pizzaIm = Emoji.get('pizza') //add emojis for foods
const hamburgerIm = Emoji.get('hamburger')
const croissantIm = Emoji.get('croissant')

pizza = new Food ('Pizza', '25 TL', pizzaIm)  // pizza, hamburger and croissant are food
hamburger = new Food ('Hamburger', '35 TL', hamburgerIm)
croissant = new Food ('Croissant', '8 TL', croissantIm)

merve = new Customer('Merve', 'Ankara') // merve is a customer

ali = new Driver ('Ali') // ali is a driver


ali.getHiredBy(abc)  //ali is abc's (restaurant) driver

pizza.add(abc) // pizza,hamburger and croissant are in abc's menu
hamburger.add(abc)
croissant.add(abc)

merve.order(pizza,abc) // customer (merve) order foods from restaurant
merve.order(hamburger,abc)


merve.printOrderList() //print merve's order list to screen
abc.printMenu() //print restaurant's menu to screen

const foods = [pizza, hamburger, croissant]
const restaurants = [abc, def]

Database.save('food.json', foods)  //save more objects to food.json with foods array
Database.save('driver.json', ali)  //save only one object to driver.json 
Database.save('restaurant.json', restaurants)
Database.save('customer.json', merve)

const loadedFile = Database.load('food.json')
console.log(loadedFile)


