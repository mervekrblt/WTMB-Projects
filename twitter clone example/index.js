// classes = Tweet, User, Like
// interactions 
// a User has many Tweets and can create new Tweets
// a User can like a Tweet by creating a Like
// each Like has one User and one Tweet
// a Tweet can have many Likes
// a User can have many Likes

User = class{
    constructor(name){
        this.name = name
        this.tweets =[]  // list of tweets
        this.likes =[]
    }
}

merve = new User('Merve')
melis = new User('Melis')
olcay = new User('Olcay')

Tweet = class {
    constructor(name){
        this.name = name
    }
    createdBy(User){            // a user can create new tweets
        User.tweets.push(this) // with this code, I can collect tweets in an array
    }
}

tweet1 = new Tweet('Welcome')
tweet2 = new Tweet('Hello')
tweet3 = new Tweet('Hey')

tweet1.createdBy(merve)
tweet2.createdBy(merve)

Like = class{
    constructor(user, tweet){
    this.user= user
    this.tweet = tweet
    }
    }

like1 = new Like ('Melis', 'tweet1')
like2 = new Like ('Olcay', 'tweet2')
