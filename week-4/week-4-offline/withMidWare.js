
const express=require("express");

const app=express();

function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){
       next();  //calling this next is send req from this middleware to next middleware
    } else {
        res.json({
            msg:"Sorry you are not of age yet"
        })
    }
}


//app.get("/ride2",function(req,res,next)  same thing doesnot matter

//now use the middleware
app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"you have successfully riden a ride 2",
    });
});



app.get("/ride1",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"you have successfully riden a ride",
    });
    
});

app.listen(3000);