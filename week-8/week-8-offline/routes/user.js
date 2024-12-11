const {Router}=require("express");

const router=Router();
const {userMiddleware}=require("../middleware/user");

router.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        message:"User created successfully"
    })

});


router.get("/couses",async function(req,res){
    //implement logic to get all the courses
    const response=await Course.fund({});

    res.json({
        courses:response
    })

    
});


router.post("/courses/:courseId",userMiddleware,function(req,res){
    //implement logic to purchase a course
    
    
})


router.get("/purchasedCourses",userMiddleware,function(req,res){
    
    //implement logic to get purchased courses
})


module.exports={
    router
}