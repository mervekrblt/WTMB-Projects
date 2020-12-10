class User{
    constructor(name, username){
        this.name = name
        this.username = username
        this.tweets = []
        this.likedTweets =[]
    }
    tweet(text){
        this.tweets.push(text)
    }
    like(tweet){
        this.likedTweets.push(tweet)
    }

}

merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibiusa')


const tweet1 = merve.tweet('Hello world')
melis.like(tweet1)