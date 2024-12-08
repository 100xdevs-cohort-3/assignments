const express=require("express");

const mongoose=require("mongoose");

// const jwt=require("jsonwebtoken");
// const JWT_SECRET="puja123";

// const {createUserRoutes, userRouter}=require("./routes/user");
// const {createCourseRoutes}=require("./routes/courses");

const {userRouter}=require("./routes/user");  
const {courseRouter}=require("./routes/courses");
const {adminRouter}=require("./routes/admin");


const app=express();

//better way
app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

// createUserRoutes(app);
// createCourseRoutes(app);

//Routing in express , the express Router


// app.use(express.json());


// function auth(req,res,next){

// }


//first it will run
async function main(){
    await mongoose.connect("mongodb+srv://puja02538:zyRWMwNQ1qCYfVSM@cluster0.d555e.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("Listening on port 3000");
}


main();