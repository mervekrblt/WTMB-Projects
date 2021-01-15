const mongoose=require('mongoose')

const LikeSchema = new mongoose.Schema({
    like:{
        type:String
    }
})

LikeSchema.plugin(require('mongoose-autopopulate'))

const LikeModel=mongoose.model('Like',LikeSchema)

module.exports= LikeModel
