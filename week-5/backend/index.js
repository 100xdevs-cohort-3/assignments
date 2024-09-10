const express = require("express");
const jwt = require("jsonwebtoken");
const userRoutes = require("./user"); // Import the routes from user.js

const JWT_SECRET = "namaste";

const app = express();

app.use(express.json());

app.use("/users", userRoutes); // Use the routes defined in user.js

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
