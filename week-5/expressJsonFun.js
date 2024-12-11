const express=require("express");
const bodyParser=require("body-parser");

const app=express();

//in Express ,if you want to send JSON data
// you need to first parse the json data
//this express.json will give a function that we use here

// let middleware=express.json();
// app.use(middleware);

//app.use(express.json());
//or this 
app.use(bodyParser.json());  //samething because express use the bodyparser under the hood

app.post("/sum",function(req,res){
    console.log(req.body);
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    res.json({
        ans: a + b,
    });
});

app.listen(3000);