//ugly way of doing routing 


// function createUserRoutes(app){
//     //route
//     app.post("/user/signup",function(req,res){

//         res.json({
//             message:"You are logged in"
//         })
        
//     })

//     app.post("/user/signin",function(req,res){
        
//         res.json({
//             message:"Incorrect credential"
//         })

//     })

//     app.get("/user/purchases",function(req,res){
    
//         res.json({

//             message:"You have purchased the course"
//         })
//     })

// }


// module.exports={
//     createUserRoutes:createUserRoutes
// }


//better way
const {Router}=require("express");

//return the router
const userRouter=Router();

userRouter.post("/signup",function(req,res){
    res.json({
        message:"You are logged in"
    })
    
})

userRouter.post("/signin",function(req,res){
    
    res.json({
        message:"Incorrect credential"
    })

})

userRouter.get("/purchases",function(req,res){

    res.json({

        message:"You have purchased the course"
    })
})


module.exports={
    userRouter:userRouter
}