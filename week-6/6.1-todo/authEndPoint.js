const express = require('express');
const app = express();

app.use(express.json());

const users = [];


function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


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
        const token=generateToken();
        foundUser.token=token;
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
    const token=req.headers.token
    //extract the token then find the user who has accesss to the token

    //const foundUser=null;

    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
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