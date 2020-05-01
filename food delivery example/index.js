restaurant = class{
    constructor(name){
    this.name= name
    this.menu=[]
    }

    add(food){
        this.menu.push(food)
        //food.list.push(this) what is the function of this code? 

    }
}

food = class{
    constructor(name,cost){
        this.name=name
        this.cost=cost
        this.list=[]
    }
}

pizza = new food ('pizza','25 TL')
hamburger = new food('hamburger','25 TL')
abc = new restaurant('abc')