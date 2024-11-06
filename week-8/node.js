const express=require("express");
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
app.use("/api/v1/admin",userAdmin);

// createUserRoutes(app);
// createCourseRoutes(app);

//Routing in express , the express Router


// app.use(express.json());


// function auth(req,res,next){

// }


app.listen(3000);