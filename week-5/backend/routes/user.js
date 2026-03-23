//  start writing your code from here
import express from 'express'
import { userModel } from '../db/index.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const router = express.Router();


router.post("/signup",async(req,res)=>{
    // taking username password 
    const {username,password} = req.body;
    // find the username from user
    try {
        const exitingUser = await userModel.findOne({username});
        if(user){
            return res.status(403).json({
                message: "User already exists"
            })
        }

        // if not found create new user
        const newUser = new userModel({
            username,password
        })
        await newUser.save();
         res.json({ message: 'User created successfully'});
    } catch (error) {
         res.status(500).json({ message: 'Error creating user', error });
    }
    
})


router.post("/signin",async(req,res)=>{
    // taking username and password

    const {username,password} = req.body;
    try {
        // find username and password 
        const user = await userModel.findOne({username,password});
        if(user){
            // generating token
            const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn: "1d"});

            res.json({
                message: "Logged successfully", token
            })
        }else{
            res.status(403).json({
                message: "Error during signin",error
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error signin in",error
        })
    }
})

export default router
