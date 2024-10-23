const express=require("express");

const app=express();

let requestCount=0;

function requestIncreaser(req,res,next){
    requestCount = requestCount + 1;
    req.name="randonepuja2234";
    console.log("Total number of reqquests = " + requestCount);
    //next();
    res.json({
        msg: "I ended the request early",
    })
    next();

}

function realSumHandler(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a + b,
    });
}


//global middleware

//middleware  
app.get("/sum",requestIncreaser,realSumHandler);

app.listen(3000);