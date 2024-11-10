const express=require("express");
const { adminMiddleware } = require("../middleware/admin");
const { title } = require("process");
const router=express.Router();

router.post("/signup",async function(req,res){
    //implement  admin signup
    const username=req.body.username;
    const password=req.body.password;


    await Admin.create({
        username,
        password
    })

    res.json({
        message:"Admin created successfully"
    })


});

router.post("/courses",adminMiddleware,async function(req,res){
    //implement course creation logic
    const {title, description, price, imageLink}=req.body;

    const newCourse=await Course.create({
        title,
        description,
        price,
        imageLink
    })
    console.log(newCourse);
    res.json({
        message:"Couse created successfully",
        courseId:newCourse._id
    })
});


//get all the courses
router.get("/courses",adminMiddleware,async function(req,res){
    const response=await Course.find({});
        res.json({
            course:response
        })
})


module.exports={
    router
}



