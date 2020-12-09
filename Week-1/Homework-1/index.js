/*
Twitter clone

Classes
    Tweet
    User
    Like

Interactions
    a User has many Tweets and can create new Tweets
    a User can like a Tweet by creating a Like
    each Like has one User and one Tweet
    a Tweet can have many Likes
    a User can have many Likes
*/

class User{
    constructor(username,password){
        this.username = username
        this.password = password
        this.tweets = []
        this.likes = []
    }
    tweet(text){
        this.tweets.push(text)
    }
    like(tweet){
        this.likes.push(tweet)
        tweet.likes.push(`+1 by ${this.username}`)
    }
}

merve = new User('merve', 'password1')
melis = new User('melis', 'password2')
ahmet = new User('ahmet', 'passwor3')
merve.tweet('Hello world')
merve.tweet('I Love JS')

class Tweet{
    constructor(text){
        this.text = text
        this.likes = []
    }
}

tweet1 = new Tweet(merve.tweets[0])
tweet2 = new Tweet(merve.tweets[1])

melis.like(tweet1)
melis.like(tweet2)
ahmet.like(tweet1)

class Like{
    constructor(){

    }
}