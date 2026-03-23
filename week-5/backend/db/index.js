//  start writing from here

import mongoose, { Mongoose, Schema } from 'mongoose';

export const ConnectDb = async()=>{
   
    // mongodb url checking

  if(!process.env.MONGO_URI){
    return res.status(500).json({
        message: "MONGO_URI is missing"
    })
  }

  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`Mongodb connected || DB HOST : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error",error)
    process.exit(1);
  }
}


const UserSchema = new mongoose.Schema({
username: String,
password: String,
})

const TodoSchema = new mongoose.Schema({
    userId: String,
    title: String,
    completed: Boolean
})

export const userModel = mongoose.model("User",UserSchema);
export const todoModel = mongoose.model("Todo",TodoSchema);