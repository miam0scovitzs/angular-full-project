const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    type:{type:String,required:true},
    name:{type:String},
    Email:{type:String},
    password:{type:String},
    mobile:{type:String},
    address:{type:String}
},{timestamps:true})
module.exports=mongoose.model("user",userSchema)