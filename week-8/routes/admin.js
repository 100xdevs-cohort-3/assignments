const {Router}=require("express");
const adminRouter=Router();
const {adminModel}=require("../db");


adminRouter.post("/signup",function(req,res){
    res.json({
        message:"You are logged in"
    })

})

adminRouter.post("/signin",function(req,res){
    res.json({
        message:"You are logged in"
    })

})

adminRouter.post("/",function(req,res){
    res.json({
        message:"You are logged in"
    })

})

adminRouter.put("/",function(req,res){

    res.json({
        message:"You are logged in"
    })
})

adminRouter.get("/bulk",function(req,res){

    res.json({
        message:"You are logged in"
    })
})


module.exports={
    adminRouter:adminRouter
}