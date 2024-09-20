const express = require("express");
const jwt = require("jsonwebtoken");
const { route } = require("../routes/user");

const JWT_SECRET = "namaste"; 

// Middleware function for authentication
function auth(req, res, next) {
    console.log("Auth middleware is being called"); // Log to check if middleware is called

    const token = req.header("token");

    if (!token) {
        return res.status(401).json({
            message: "Access Denied. No token provided."
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.username = decodedData.username; // Pass the username to the next middleware
        console.log("Token is valid. Username:", req.username); // Log the decoded username
        next(); // Continue to the next middleware/route handler
    } catch (error) {
        console.log("Token is invalid");
        res.status(400).json({
            message: "Invalid token"
        });
    }
}




module.exports = auth; // Export the auth middleware
