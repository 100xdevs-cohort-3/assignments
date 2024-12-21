const express = require('express');

const jwt=require("jsonwebtoken");
const JWT_SECRET="randompujailovemyself"
const app = express();

app.use(express.json());

const users = [];



app.post("/signup", function(req, res)  {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })
    res.send({
        message: "You have signed up"
    })
    console.log(users);
});

app.post("/signin",function (req,res){
    const username=req.body.username;  //this
    const password=req.body.password;
    

    //same
    let foundUser =null;

    for(let i=0;i<users.length;i++){
        if(users[i].username == username && users[i].password==password){
            foundUser=users[i];
        }
    }


    if(foundUser){
        //convert this username into a token using jwt secret
        const token=jwt.sign({
            username:username
        },JWT_SECRET);  //convert their username over to a jwt

        //no need to store in this
        //foundUser.token=token;
        res.json({
            message:token
        })
    }
    else {
        res.status(404).send({
            message:"Invalid username or passowrd"
        })
    }
});

//it will send the req with token along with it in the headers
app.get("/me",function(req,res){
    //get the token
    const token=req.headers.token  //jwt
    const decodedInformation=jwt.verify(token,JWT_SECRET);   //get back the username(jwt to username decode)
    const username=decodedInformation.username
    
    //requred the password so we do this
    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser=users[i];
        }
    }

    //if token if found then
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }
    else {
        res.json({
            message:"Token invalid"
        })
    }


})



app.listen(3000);