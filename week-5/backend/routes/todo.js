//  start writing your code from here

import express from 'express';
import { authMiddleware } from '../middleware/user.js';
import {todoModel} from '../db/index.js'
import mongoose, { mongo } from 'mongoose';

const router = express.Router();
router.use(authMiddleware)

router.post("/",async(req,res)=>{
    const {title} = req.body;

    if(!title){
        return res.status(400).json({
            message: "Invalid inputs"
        })
    }

    try {
        const newTodo = await todoModel.create({
            title: title,
            completed: false,
            userId: req.userId
        })

        res.status(201).json({
            message: "New todo created successfully",
            newTodo
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error while creating new todo"
        })
    }
})


router.get("/",async(req,res)=>{
    try {
        const todos = await todoModel.find({userId: req.userId})
        res.json({
            todos
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error while fetching todos"
        })
    }
})

router.put("/:id",async(req,res)=>{
    const {id} = req.params;
    const {title,completed} = req.body;

    try {
        const updatedTodo = await todoModel.findOneAndUpdate(
            {_id: id,userId: req.userId},
            {$set: {title,completed}},
            {new: true}
        )

        if(!updatedTodo){
            return res.status(404).json({
                message: "Todo not found or not authorizes"
            })
        }
          res.json({
            message: "Todo updated successfully",
            updatedTodo
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error updating todo"
        });
    }

})

router.delete("/:id",async(req,res)=>{
    const {id} = req.params;

    try {
        const deleteTodo = await todoModel.findOneAndDelete({
            _id: id,
            userId: req.userId
        })

        if(!deleteTodo){
             return res.status(404).json({
                message: "Todo not found or you are not authorized to delete it"
            });
        }

        res.json({
            message: "Todo deleted successfully",
            deleteTodo
        });
    } catch (error) {
        
    } res.status(500).json({
            message: "Error while deleting todo"
        });
})


export default router