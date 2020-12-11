class User{
    constructor(name, username){
        this.name = name
        this.username = username
        this.tweets = []
        this.likedTweets =[]
    }
    tweet(text){
        const tweet = new Tweet(this,text)
        this.tweets.push(tweet)
    }
    like(tweet){
        this.likedTweets.push(tweet)
    }

}

class Tweet{
    constructor(user, text){
        this.user =user.username
        this.text = text
    }
}

merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibiusa')

merve.tweet('Hello world')
const tweet1 = new Tweet(merve, 'Hello world')

melis.like(tweet1)