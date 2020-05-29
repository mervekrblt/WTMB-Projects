// classes = Tweet, User, Like
// interactions 
// a User has many Tweets and can create new Tweets
// a User can like a Tweet by creating a Like
// each Like has one User and one Tweet
// a Tweet can have many Likes
// a User can have many Likes

class User{
    constructor(name){
        this.name = name
        this.tweets =[]  //list of user's tweets
        this.likes =[]   //list of user's likes
    }
}

merve = new User('Merve')
melis = new User('Melis')
olcay = new User('Olcay')

class Tweet{
    constructor(user, text){
        this.user = user
        this.text = text
        this.likes = [] //list of tweet's likes
    }
    createdBy(User){             // a user can create new tweets
        User.tweets.push(this) //with this code, I can collect tweets in an array
    }
}

tweet1 = new Tweet('merve','Welcome')
tweet2 = new Tweet('merve','Hello')

tweet1.createdBy(merve)
tweet2.createdBy(merve)

class Like{
    constructor(user, tweet){
    this.user= user  
    this.tweet = tweet
    }
    for(user, tweet){  // add a like with "for" function
        user.likes.push(this) // this like goes to array of user likes
        tweet.likes.push(this) // this like goes to array of tweet likes
    }
}

like1 = new Like ('Melis', 'tweet1')
like2 = new Like ('Olcay', 'tweet2')
like3 = new Like ('Olcay', 'tweet1')

like1.for(merve, tweet1)
like2.for(merve, tweet2)
like3.for(merve, tweet1)