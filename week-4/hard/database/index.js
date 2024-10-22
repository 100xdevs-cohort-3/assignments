const mongoose = require('mongoose');

// Connect to MongoDB
const ConnectToMongoDB=async()=>{
try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("mongodb is connected")

}catch(err){
    console.log("mongodb is not connected")
}
}
ConnectToMongoDB()
// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}