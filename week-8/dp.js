const mongoose=require("mongoose");
const { title } = require("process");


const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const User=new Schema({
    name: String,
    email: String,
    password:String

})


const Admin=new Schema({
    name:String,
    password:String
})

const Course=new Schema({
    title:String,
    done:Boolean
})

const Purchase=new Schema({
    userId:ObjectId,
    title:String
})


//calling the model
const UserModel=mongoose.model("users",User);
const AdminModel=mongoose.model("admins",Admin);
const CourseModel=mongoose.model("courses",Course);
const PurchaseModel=mongoose.model("purchases",Purchase);


module.exports={
    UserModel:UserModel,
    AdminModel:AdminModel,
    CourseModel:CourseModel,
    PurchaseModel:PurchaseModel
}