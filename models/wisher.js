const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WisherSchema=new Schema({

    email:{type:String, required:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    address:{type:String, required:true},
    wishes:{type:Array, required:true, default:[]},
    date: { type: Date, default: Date.now }

});

const Wisher = mongoose.model("Wisher",WisherSchema);

module.exports=Wisher;