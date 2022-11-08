const mongoose = require("mongoose")
const itemModel = new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    price:{type:String,required:true}
})

module.exports= mongoose.model("Item",itemModel)