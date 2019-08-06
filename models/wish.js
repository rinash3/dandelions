const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishSchema=new Schema({
    object:{type:String, required:true},
    category:{type:String, required:true},
    giverId:{type:String, required:true},
    WisherId:{type:String, required:true},
    status:{type:String, required:true},//  Fulfilled/waiting for giver/on its way
    date: { type: Date, default: Date.now }
});

const Wish = mongoose.model("Wish", WishSchema);
module.exports= Wish;