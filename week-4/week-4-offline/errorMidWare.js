const express=require("express");

const app=express();
let errorCount=0;

//you have been given an express server which has a few endpoints
//your task us to
//1. emsure that if there is ever an exception, the end user sees a status code of 404
// 2. maintain the errorcount variable whose value shold go up every time there is an expection in any end point

app.get("/user",function(req,res){
    throw new Error("User not found");
    res.status(200).json({name: 'json'});
});
 
app.listen(3000);
