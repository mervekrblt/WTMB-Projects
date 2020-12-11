class User{
    constructor(name, username){
        this.name = name
        this.username = username
        this.tweets = []
        this.likedTweets =[]
        this.following = []
        this.followers =[]
    }
    tweet(text){
        const tweet = new Tweet(this,text)
        this.tweets.push(tweet)
        return tweet
    }
    like(tweet){
        const like = new Like(this, tweet)
        this.likedTweets.push(tweet)
        tweet.likes.push(like)
        return like
    }
    follow(user){
        user.followers.push(this)
        this.following.push(user)
    }
}

class Tweet{
    constructor(user, text){
        this.creator =user.username
        this.text = text
        this.likes = []
    }
}

class Like{
    constructor(user, tweet){
        this.user = user.username
        this.likedTweet= tweet.text
    }
}

merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibiusa')

merve.follow(melis)
const tweet1 = merve.tweet('Hello world')

const like1 = melis.like(tweet1)