//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const bcrypt = require("bcrypt")
dotenv.config();
const app = express();

app.use(express.json());

const secret = process.env.JWT_SECRET;  // This should be in an environment variable in a real application
const port = process.env.PORT;

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  // userSchema here
  username:  {type: String, unique: true},
  password: String
});

const adminSchema = new mongoose.Schema({
// adminSchema here
});

const courseSchema = new mongoose.Schema({
// courseSchema here
});

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

const authMiddleware = (req, res, next) => {
//  authMiddleware logic here 
};

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mongo").then(() => console.log("Database connected successfully")) 


// Admin routes
app.post('/admin/signup', (req, res) => {
    // logic to sign up admin
});

app.post('/admin/login', (req, res) => {
    // logic to log in admin
});

app.post('/admin/courses', (req, res) => {
    // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
    // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
    // logic to get all courses
});

// User routes
app.post('/users/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existUser = await User.findOne({ username });
        if (existUser) {
            return res.status(400).json({ message: "Username already taken, please choose another username" });
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            username,
            password: hashedpassword,
        });

        // Generating a JWT token
        const token = jwt.sign({ id: newUser._id }, secret); 

        res.status(201).json({
            message: "User Created Successfully",
            token
        });
    } catch (error) {
        res.status(500).json({ message: "An error occurred." });
    }
});


app.post('/users/login', async (req, res) => {
    // logic to log in user
    try {
        const {username, password} = req.body;
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(404).json("User not Found")
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch) {
            return res.json({
                message: "Invalid credientails"
            })
        }

        const token = jwt.sign({ id: user._id}, secret)

        res.status(200).json({
            message: "Logged in successfully",
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred." });
    }

});

app.get('/users/courses', (req, res) => {
    // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
    // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
    // logic to view purchased courses
});

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});