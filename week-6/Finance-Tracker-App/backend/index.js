// Import required libraries
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// In-memory storage
let users = [];
let transactions = [];

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key';
const saltRounds = 12;

// Signup route
app.post('/signup', (req, res) => {
    
});

// Signin route
app.post('/signin', (req, res) => {
    
});

// Middleware to authenticate user
const authenticate = (req, res, next) => {
    
};

// Get transactions route
app.get('/transactions', authenticate, (req, res) => {
    
});

// Add transaction route
app.post('/transactions', authenticate, (req, res) => {
    
});

// Update transaction route
app.patch('/transactions/:id', authenticate, (req, res) => {
});

// Delete transaction route
app.delete('/transactions/:id', authenticate, (req, res) => {
    
});

// Get summary route
app.get('/summary', authenticate, (req, res) => {
    
});

// Start server
app.listen(3000);
