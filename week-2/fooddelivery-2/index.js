const Customer = require('./customer')
const Driver = require('./driver')
const Food = require('./food')
const Restaurant = require('./restaurant')
const Emoji = require('node-emoji')

abc = new Restaurant('ABC') //abc is a restaurant

const pizzaIm = Emoji.get('heart') //add emojis for foods
const hamburgerIm = Emoji.get('coffee')
const croissantIm = Emoji.get('star')

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


