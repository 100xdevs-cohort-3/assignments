const express = require('express');
const app = express();
const userRoutes = require("./routes/user")
const todoRoutes = require("./routes/todo.js")
const cors = require("cors")
const mongoose =  require("mongoose")
mongoose.connect("mongodb+srv://anshumanlaskar2:aSZZUE86B85FwAY7@cluster0.z6d4m.mongodb.net/todo-app-database");
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);


app.listen(3000, ()=>{
    console.log("Server is running at http://localhost:3000");
})