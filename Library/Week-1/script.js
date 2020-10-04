//User have a library 
//There are 2 lists which are holding films and series separately in watched/unwatched lists
//User can add comments

class User{
    constructor(name){
        this.name = name
    }
    addComment(film, comment){
        film.comments.push(`${comment}`)
    }
}



class Library{
    constructor(name){
        this.name = name
        this.watchedList = []
        this.unwatchedList = []
    }
    watched(film){
        this.watchedList.push(film)
    }
    unwatched(film){
        this.unwatchedList.push(film)
    }
}



class Film{
    constructor(name, director, imdb){
        this.name = name
        this.director = director
        this.imdb = imdb
        this.comments = []
    }
}


class Serie{
    constructor(name, creator, imdb){
        this.name = name
        this.creator = creator
        this.imdb = imdb
        this.comments = []
    }
}

amelie = new Film('Amelie', ' Jean-Pierre Jeunet', 8.3)
merveLibrary = new Library("Merve's Library")
merve= new User('Merve')
merve.addComment(amelie, 'I like it')
friends = new Serie('Friends', 'David Crane, Marta Kauffmant', 8.9)

merveLibrary.watched(amelie)
merveLibrary.unwatched(friends)