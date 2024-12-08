const express=require("express");

const app=express();

function loggerMiddleware(req,res,next){
    console.log("Method is " + res.method);
    console.log("Host is " + req.hostname);
    console.log("Route is " + req.url);
    console.log(new Date());
    next();
}

app.use(loggerMiddleware);

app.get("/multiply",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        answer: a * b
    });

});

app.get("/add",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        answer: a + b
    });

});


app.get("/divide",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        answer: a / b
    });

});

app.get("/subtract",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        answer: a - b
    });

});


app.listen(3000);