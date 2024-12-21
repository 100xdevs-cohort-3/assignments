
const express=require("express");

const app=express();

function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){
       next(); 
    } else {
        res.json({
            msg:"Sorry you are not of age yet"
        })
    }
}
//order matter ware we introduce this middleware
//here
app.use(isOldEnoughMiddleware);

//now use the middleware
app.get("/ride2",function(req,res){
    res.json({
        msg:"you have successfully riden a ride 2",
    });
});

//or here

app.get("/ride1",function(req,res){
    res.json({
        msg:"you have successfully riden a ride",
    });
    
});

app.listen(3000);