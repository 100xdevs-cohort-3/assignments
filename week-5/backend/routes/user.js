const express = require("express");
const Router = express.Router();
const {userModel, todosModel} = require("../db/index")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {z} = require("zod")
const { userMiddleware } = require("../middleware/user");
dotenv.config();
const UserRouter = Router;


UserRouter.post("/signup" , async(req,res)=>{

   
  const requiredBody = z.object({
    firstname : z.string(),
    lastname : z.string(),
    password : z.string().min(4).max(12),
    email : z.string().email().min(6)

  })
  const parsedData = requiredBody.safeParse(req.body)


  if(!parsedData.success){
     return res.status(400).json({
      error : parsedData.error
     })
  }
    const {firstname , lastname , email , password} = req.body;


    if(!firstname || !lastname || !email || !password){
        return res.status(400).json({
            error : "Please fill all the required details"
         })
    }

    try{  
        const hashedPassword = await bcrypt.hash(password , 10);
       await userModel.create({
        firstname,
        lastname,
        email,
        password : hashedPassword
       })


      return res.status(201).json({
        message : "You've succesfully signed up!"
       })

    }catch(error){
         return res.json({
            error : error
          })
         
    }
})
 

UserRouter.post("/signin" , async (req,res)=>{
    
  const {email , password} = req.body;
  if(!email || !password){
    return res.status(400).json({
        error : "Kindly fill all the details"
    })
  }

  try{
     const user = await userModel.findOne({
        email : email
     })


     if(user){

        const isMatch = await bcrypt.compare(password , user.password);

        if(isMatch){
           
            const token = jwt.sign({
                id : user._id
            },process.env.JWT_SECRET)

            return res.json({
                token : token
            })

        }
        else{
          return res.status(400).json({
            error : "Password doesn't match"
          })
        }

     }
     else{
        return res.status(403).json({
            error : "No User Exists with this email ! Sign Up "
        })
     }
    

  }catch(error){
    return res.json({
        error : error
    })
  }


})


UserRouter.get("/todos",userMiddleware,async (req,res)=>{
    const userid = req.userid;
   const todos = await todosModel.find({
    createdBy : userid
   })
    

   if(todos.length==0){
     return res.json({
      message : " No tasks added yet !"
     })
   }


   return res.json({
    tasks : todos
   })

   
})




module.exports = {
    UserRouter
}