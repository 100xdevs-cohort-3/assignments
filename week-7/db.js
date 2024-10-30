const mongoose =require("mongoose");

const schema=mongoose.Schema;
const Objected=mongoose.Objected;

const User=new Schema({
    email:String,
    password: String,
    name: String
})


const Todo=new Schema({
    title:String,
    done: Boolean,
    userId: Objected
})