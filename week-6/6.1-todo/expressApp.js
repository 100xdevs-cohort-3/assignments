const express=require("express");

const app=express();

app.use(express.json());

//store the information in this  global array
const users=[];

//we will make sure that same oerson doesnot go twice in the array

//it will generate the a random long string
function generateToken(){
    let options=['a','b','c','d','e','f','g','h','i','j','k','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

    let token="";
    for (let i=0;i<32;i++){
        //use a sinple function here
        token+=options[Math.floor(Math.random()*options.length)];// 0=>32 ( 22.89643=22 )gloor

       
    }
    return token;
}

//2 rautes have signin signup
app.post("/signup",function (req,res){
    //input validations using zod later
    const username=req.body.username;
    const password=req.body.password;

    // if(users.find(u=>u.username=== username)){
    //     res.json({
    //         message:"You are already signed up"
    //     })
    //     return 
    // }

    users.push({
        //store the new users
        username:username,
        password:password
    })

    res.json({
        message:"You are signed in"
    })
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

    /*

    //same as map function
    //it will find the username & password which has this un and pw
    const user=users.find(function(u){
        if(u.username==username && u.password==password){
            return true;

        }else {
            return false;
        }
    })
    
    */

});

app.listen(1000);  //that the http server is listening on port 3000