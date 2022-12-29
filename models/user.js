const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    nama:{
        type:String
    },
    email:{
        type:String
    },
    role:{
        type:Number,
        default:1
    }
})


module.exports=mongoose.model('user',userSchema)
