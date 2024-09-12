// Import the express, bcrypt, jwt, and cors libraries
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Create an instance of express application
const app = express();

// Use the express.json() middleware to parse the request body
app.use(express.json());

// Use the cors middleware to allow cross-origin requests
app.use(cors());

// Secret key for JWT token generation
const JWT_SECRET = "ilove100xdevsliveclassse";

// Number of salt rounds for bcrypt hashing
const saltRounds = 12;

// Store users and TODOs in arrays
const users = []; // Array to store registered users
const todos = []; // Array to store TODO items


// Signup route to register a new user
app.post("/signup", function(req, res) {
    
});

// Signin route to authenticate a user
app.post("/signin", function(req, res) {
    
});

// Middleware function to authenticate the user based on the token
function auth (req, res, next) {
    
}

// Route to get all To-Dos for the authenticated user
app.get("/todos", auth, function(req, res) {
    
});

// Route to create a new To-Do
app.post("/todos", auth, function(req, res) {
    
});

// Route to update a To-Do
app.patch("/todos/:id", auth, function(req, res) {
    
});

// Route to delete a To-Do
app.delete("/todos/:id", auth, function(req, res) {
    
});

// Route to mark a To-Do as done/undone using PUT
app.patch("/todos/:id/done", auth, function(req, res) {
    
});

// Server listening on port 3000
app.listen(3000); 