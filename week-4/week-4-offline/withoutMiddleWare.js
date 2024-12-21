
const express=require("express");

const app=express();

//functionnthat returns a boolean if the age of the person is more than 14
function isOldEnough(age){
    if(age>=14){
        return true;
    } else{
        return false;
    }
}

app.get("/ride2",function(req,res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully riden a ride 2"
        })
    }else {
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
    
})



app.get("/ride1",function(req,res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully riden a ride"
        })
    }else {
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
    
})

app.listen(3000);