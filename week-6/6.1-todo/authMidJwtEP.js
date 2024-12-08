const express =require("express");
const jwt=require("jsonwebtoken");

const JWT_SECRET="puja12345";



const app=express();
//extract the json body from the request
app.use(express.json());

//push to global aaray
const users=[];

app.post("/signup",function(req,res){
    const username=req.body.username
    const password=req.body.password

    users.push({
        username: username,
        password:password
    })

    //we shuold check if a user with this username already exists

    res.json({
        message: "You are signed in"
    })
    


})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    //check if that user present
    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username=== username && users[i].password===password){
            foundUser=users[i];
        }
    }

    if(!foundUser){
        res.json({
            message:"Credentials incorrect"
        })
        return
    }
    else {
        const token=jwt.sign({
            username
        },JWT_SECRET);

        res.header("jwt",token);

        res.header("random","puja");

        res.json({
            token:token
        })
    }


})


function auth(req,res,next){
    const token=req.headers.token;  //extract the token
    const decodedData=jwt.verify(token,JWT_SECRET);  //check the token is correct or not
    if(decodedData.username){ //if correct then move
        req.username=decodedData.username; 
        next()
    }else {  //else end the call
        res.json({
            message:"YOu are not logged in"
        })
    }
}

app.get("/me",auth,function(req,res){
        let foundUser=null;

        for(let i=0;i<users.length;i++){
            if(users[i].username===req.username){
               foundUser=users[i]
        }
    }

    res.json({
        username:foundUser.username,
        password:foundUser.password
    })

})
app.listen(3000);