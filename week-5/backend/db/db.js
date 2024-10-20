const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const User = new Schema({
    name : String,
    password : String,
    email : {type: String, unique: true}
});


const Todo = new Schema({
    description:String,
    done:Boolean,
    userId:{
        type: ObjectId,
        ref:"User"
    }
});

const UserModel = new mongoose.model("users", User);
const TodoModel = new mongoose.model("todos", Todo);

module.exports = {UserModel, TodoModel};
