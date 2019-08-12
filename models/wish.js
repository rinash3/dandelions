const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishSchema=new Schema({
    object:{type:String, required:true},
    category:{type:String, required:true},
    memo:{type:String, required:true, default:""},
    giverId:{type:String, required:true,default:""},
    WisherId:{type:String, required:true},//its actually email :P
    status:{type:Boolean, required:true,default:false},// true or false?
    date: { type: Date, default: Date.now }
});

const Wish = mongoose.model("Wish", WishSchema);
module.exports= Wish;