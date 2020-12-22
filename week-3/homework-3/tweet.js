module.exports =class Tweet{
    constructor(user, text){
        this.creator =user.username
        this.text = text
        this.likes = []
    }
}