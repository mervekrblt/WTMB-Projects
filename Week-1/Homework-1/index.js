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
    constructor(name, username){
        this.name =name
        this.username =username
        this.followers =[]
        this.following = []
        this.tweets = []
        this.likedTweets = []
    }
    follow(user){
        user.followers.push(this)
        this.following.push(user)
    }
    tweet(text){
        const tweet = new Tweet(this.username,text)
        this.tweets.push(tweet)
    }
    like(user, tweet){
        const likedTweet = new Like(user.username, tweet)
        this.likedTweets.push(likedTweet)
        user.tweets.filter(i => i.text===tweet)[0].likes.push(this.username) //I am crying

    }
}

class Tweet{
    constructor(creator, text){
        this.creator=creator
        this.text = text
        this.likes =[]
    }
        
}

class Like{
    constructor(user, text){
        this.user = user
        this.text = text
    }
}

merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibiusa')

melis.follow(merve)

merve.tweet('Hello world')
merve.tweet('I love JS')
melis.tweet('LOL')

melis.like(merve, 'Hello world')
melis.like(merve, 'I love JS')