const express= require("express");


const app=express();

app.get("/files/:fileName",function (req,res){
    const name=req.params.fileName;
    console.log(name);
    res.json({});
});

app.listen(3000);