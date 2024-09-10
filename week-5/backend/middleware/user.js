const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "namaste"; 

// Middleware function for authentication
function auth(req, res, next) {
    const token = req.header("token");

    if (!token) {
        return res.status(401).json({
            message: "Access Denied. No token provided."
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.username = decodedData.username; // Pass the username to the next middleware
        next(); // Continue to the next middleware/route handler
    } catch (error) {
        res.status(400).json({
            message: "Invalid token"
        });
    }
}

module.exports = auth; // Export the auth middleware
