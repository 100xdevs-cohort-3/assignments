const express=require("express");

const app=express();

app.post("/signup",function(req,res){
    //use the schema here
    

});

app.post("/login",function(req,res){

});


//only user is login then can create the todo
app.post("/todo",function(req,res){

});

//only login user can get all the todos because this is authenticated 
app.get("/todos",function(req,res){

});

app.listen(3000);