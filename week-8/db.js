const mongoose=require("mongoose");
console.log("connected to")
//mongoose.connect("mongodb+srv://puja02538:zyRWMwNQ1qCYfVSM@cluster0.d555e.mongodb.net/coursera-app")
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;


const userSchema=new Schema({
    
    email: {type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String

});


const adminSchema=new Schema({
    email: {type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String,

});

const courseSchema=new Schema({
    title:String,
    RTCSessionDescription:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId,
});

const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId,
});


//calling the model
const UserModel=mongoose.model("users",userSchema);
const AdminModel=mongoose.model("admins",adminSchema);
const CourseModel=mongoose.model("courses",courseSchema);
const PurchaseModel=mongoose.model("purchases", purchaseSchema);


module.exports={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}