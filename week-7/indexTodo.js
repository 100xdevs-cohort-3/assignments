const express=require("express");

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const JWT_SECRET="puja1234";
const {z}=require("zod");
//Import 
const {UserModel, TodoModel}=require("./db");
const { default: mongoose } = require("mongoose");

//it will automatically create the database for us name(toodo-puja-2)(url present in .env file)
mongoose.connect("mongodb+srv://puja02538:zyRWMwNQ1qCYfVSM@cluster0.d555e.mongodb.net/todo-puja-21");

const app=express();

//passig the body only work if we do this express.json middleware
app.use(express.json());

app.post("/signup", async function(req,res){
    //create schema for the zod
    const requiredBody=z.object({
        //email:z.string().min(3).max(100).email(),
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password:z.string().min(3).max(100)
    })

    const parsedData=requiredBody.parse(req.body);
    const parsedDataWithSuccess=requiredBody.safeParse(req.body); //return 2 things success and data

    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Invalid format",
            error:parsedDataWithSuccess.error
        })
        return
    }
    


    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;


    //Input validation written by me
    // if(typeof email !== "string" || email.length <5 || !email.include("@")){
    //     res.json({
    //         message:"Email incorrect"
    //     })
    //     return 
    // }

    //hash the password
    const hashPassword=await bcrypt.hash(password,5);
    console.log(hashPassword);


        //use the schema here
        //this will insert data in database
    await UserModel.create({
        email:email,
        password:hashPassword,
        name:name

    })

  
    res.json({
         message:"You are logged in"
    })
    

});

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    

    //all db call is returning a promise we have to await that if
    const response=await UserModel.findOne({
        email:email,
    
    })

    //else
    if(!response){
        res.status(403).json({
            message:"User does not exist inour db"
        })
        return
    }


    const passwordMatch=await bcrypt.compare(password,response.password);


    console.log(passwordMatch);

    if(passwordMatch){
        console.log({
            id:response._id.toString()
        })
        const token=jwt.sign({
            id:response._id.toString()
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