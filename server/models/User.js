const mongoose = require('mongoose')
const userSchema =  mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String
    },
    address:{
        type:String

    },
    phone:{
        type:String
    }
},{
    timestamps:true
})
module.exports = mongoose.model('User',userSchema)