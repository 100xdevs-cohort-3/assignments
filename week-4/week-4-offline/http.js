//creating an http server
// express
// is express node default library => no
//we have to import it by mention the name
//npm install express
//npm init -y


const express =require("express");

const app=express();

app.get("/",function(req,res){
    res.send("hiii there!!!");//send them back
})

app.listen(3001);
