const express = require("express");
const { userMiddleware } = require("../middleware/user");
const {todosModel, userModel} = require("../db/index")
const Router = express.Router();

const TodoRouter = Router;


TodoRouter.post("/create" ,userMiddleware, async (req,res)=>{
   
    try{
        const {title} = req.body;

        if(!title){
            return res.status(400).json({
                error : "Please provide title of task"
            })
        }

        console.log("user id :"+req.userid);
        console.log(typeof req.userid);
        
        const time = new Date();
        await todosModel.create({
           title : title,
           createdAt : time.toJSON(),
           createdBy : req.userid,
           isCompleted : false


        })


        return res.status(201).json({
            message : "Task added succesfully"
        })

    }catch(error){
        console.log(error);
         return res.json({
            error : error.message
         })
    }
})


TodoRouter.put("/mark/:id" ,userMiddleware, async(req,res)=>{
   try{

    const todo =  await todosModel.findOne({
        _id : req.params.id,
        createdBy : req.userid // user should only be able to update my task
    })

      if(!todo){
        return res.status(400).json({
            error : " No taks found to update"
        })
      }


      await todo.updateOne({
        isCompleted : !todo.isCompleted
      })

      return res.json({
        message : "Task updated succesfully !"
      })

    

   }catch(error){
      return res.json({
           error : error.message
      })
   }
})


TodoRouter.delete("/delete/:id" , userMiddleware, async(req,res)=>{
  
    try{
       const deletetodo = await todosModel.findOneAndDelete({
        _id : req.params.id,
        createdBy : req.userid
       })

       

       if(!deletetodo){
        return res.json({
            error : "No task found to be deleted"
        })
       }

       return res.json({
        message : "Task deleted successfully !"
       })

    }catch(error){
         return res.json({
            error : error.message
         })
    }
}) 




module.exports = {
    TodoRouter
}    