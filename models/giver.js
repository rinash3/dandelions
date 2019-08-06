const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiverSchema=new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    pastGifts:{type:Array, required:true, default:[]},
    tickets:{type:Number, required:true, default:0}
});

const Giver = mongoose.model("Giver", GiverSchema);
module.exports=Giver;