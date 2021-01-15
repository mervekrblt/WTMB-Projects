
const BaseService = require('./base-service')
const LikeModel = require('../models/like')

class LikeService extends BaseService {
    model=LikeModel
}

module.exports = new LikeService()