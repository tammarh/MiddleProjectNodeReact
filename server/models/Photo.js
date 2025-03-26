const mongoose = require('mongoose')
const photoSchema =  mongoose.Schema({
    title:{
        type:String,
        default:'non title'
    },
    imageUrl:{
        type:String,
        require: true
    }
},{})
module.exports = mongoose.model('Photo',photoSchema)