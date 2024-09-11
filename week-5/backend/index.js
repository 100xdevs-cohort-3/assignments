const express = require("express");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/user"); // Import the routes from user.js
const todoRoutes = require("./routes/todo"); 

const app = express();

app.use(express.json());

app.use("/users", userRoutes); // Use the routes defined in user.js
app.use("/todos", todoRoutes); // Register the todo routes

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
