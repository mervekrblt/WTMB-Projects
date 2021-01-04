const BaseService = require('./base-service')
const TweetModel = require('../models/tweet')

class TweetService extends BaseService {
    constructor() {
        super(TweetModel, `${__dirname}/../tweet-database.json`)
    }
}

module.exports = new TweetService()