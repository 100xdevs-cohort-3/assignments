const mongoose = require("mongoose");
const { date, boolean } = require("zod");
// creating database connection

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId

const user = new Schema({
    firstname : String,
    lastname : String,
    password : String,
    email : {type : String}
})



const todos = new Schema({
 title : String,
 createdAt : {type: Date},
 createdBy : {type : ObjectId , ref : "user"},
 isCompleted : {type: Boolean , default : false}
})


const userModel = mongoose.model("users" , user);

const todosModel = mongoose.model("todos" , todos);

module.exports= {
    userModel,
    todosModel
}



