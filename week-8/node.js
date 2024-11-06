const express=require("express");
const jwt=require("jsonwebtoken");


const app=express();



app.get("/user login",auth,function(req,res){
    const user=req.body.user;
    const password=req.body.password;


    res.json({
        message:"You are logged in";
    })
    
})

app.get("/signup",function(req,res){
    const user=req.body.user;
    const password=req.body.password;

    res.json({
        message:"Incorrect credential"
    })

})

app.get("/purchase a course",function(req,res){
    const user=req.body.user;
    const password=req.body.password;

    res.json({

    })
})

app.get("/see course",function(req,res){

})

app.get("/admin login",auth,function(req,res){

})

app.post("/admin signup" ,function(req,res){

})

app.get("/create a couse",function(req,res){

})

app.get("/delete a couse",function(req,res){

})

app.get("/add couse content",function(req,res){

})

function auth(req,res,next){

}


app.listen(3000);