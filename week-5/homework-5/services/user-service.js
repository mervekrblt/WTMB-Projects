const BaseService = require('./base-service')
const UserModel = require('../models/user')


class UserService extends BaseService {
    model=UserModel

    async tweetText(user,text){
        user.tweets.push(text)
        await user.save()
    }
}

module.exports = new UserService()