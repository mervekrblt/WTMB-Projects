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

class User {
    constructor(name, username) {
        this.name = name
        this.username = username
        this.tweets = []
        this.likes = []
    }
    hasManyTweets() {
        const x = this.tweets.length
        console.log(`${this.name} has ${x} tweets`)
    }
    has(like) {
        this.likes.push(`You liked ${like.user}'s '${like.tweet}' tweet`)
    }
}



class Like {
    constructor(user, tweet) {
        this.user = user
        this.tweet = tweet
    }
}


class Tweet {
    constructor(tweet) {
        this.tweet = tweet
        this.likes = []
    }
    createdBy(user) {
        user.tweets.push(this)
    }
    likedBy(user) {
        this.likes.push(user.username)
    }
}

merve = new User('Merve', 'usagi')
melis = new User('Melis', 'chibi')
olcay = new User('Olcay', 'olcay')

tweet1 = new Tweet('Hello World!')
tweet2 = new Tweet('I love JS')
tweet3 = new Tweet('Sister give me laptop, it is my turn')

//user has tweets
tweet1.createdBy(merve)
tweet2.createdBy(merve)
tweet3.createdBy(melis)

like1 = new Like('merve', 'Hello World!')
like2 = new Like('merve', 'I love JS')
like3 = new Like('melis', 'Sister give me laptop, it is my turn')

//user has likes
melis.has(like1)
melis.has(like2)
olcay.has(like3)
merve.has(like3)

//user's tweet has likes
tweet1.likedBy(melis)
tweet2.likedBy(melis)
tweet1.likedBy(olcay)
tweet3.likedBy(olcay)