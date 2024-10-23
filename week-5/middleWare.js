const express=require("express");

const app=express();

let requestIncreaser=0;

function requestIncreaser(req,res,next){
    requestCount = requestCount + 1;
    req.name="randonepuja2234";
    console.log("Total number of reqquests = " + requestCount);

}

function realSumHandler(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a + b,
    });
}


//middleware
app.get("/sum",requestIncreaser,realSumHandler);

app.listen(3000);