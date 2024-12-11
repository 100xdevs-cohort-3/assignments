const mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect("mongodb+srv://puja02538:zyRWMwNQ1qCYfVSM@cluster0.d555e.mongodb.net/coursera-app-offline");

//Define the schemas
const AdminSchema=new mongoose.Schema({
    //schema definition here
    username:String,
    password:String
});

const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    //rltn in mongoo
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
});


const Admin=mongoose.model('Admin',AdminSchema);
const User=mongoose.model('User',UserSchema);
const Course=mongoose.model('Course',CourseSchema);


module.exports={
    Admin,
    User,
    Course
}
