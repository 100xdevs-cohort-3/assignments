const express=require("express");


const jwt=require("jsonwebtoken");
const JWT_SECRET="puja1234";
//Import 
const {UserModel, TodoModel}=require("./db");
const { default: mongoose } = require("mongoose");

//it will automatically create the database for us name(toodo-puja-2)(url present in .env file)
mongoose.connect("MONGODB");

const app=express();

//passig the body only work if we do this express.json middleware
app.use(express.json());

app.post("/signup", async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    //use the schema here
    //this will insert data in database
    await UserModel.create({
        email:email,
        password:password,
        name:name

    })

    res.json({
        message:"You are logged in"
    })

});

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    //all db call is returning a promise we have to await that
    const user=await UserModel.findOne({
        email:email,
        password:password
  
    })

    console.log(user);

    if(user){
        console.log({
            id:user._id.toString()
        })
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET);

        res.json({
            token:token
        });
    }else {
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

});


//only user is login then can create the todo
app.post("/todo",auth,function(req,res){

    const userId=req.userId;
    const title=req.body.title;
    TodoModel.create({
        title,
        userId
    })

    res.json({
        userId:userId
    })

});

//only login user can get all the todos because this is authenticated 
app.get("/todos",auth,async function(req,res){

    const userId=req.userId;
    const todos=await TodoModel.find({
        userId:userId
    })

    res.json({
        todos
    })

});


// authentication middleware
function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId=decodedData.id;
        next();

    }else {
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

}

app.listen(3000);