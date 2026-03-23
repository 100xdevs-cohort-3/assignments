//  TODO: Can you create backend with standard folder structure like: week-4/hard ???

import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import dotenv from 'dotenv'


import connectDb from './config/db.js';
dotenv.config();
const app = express();



app.use(express.json());

// const secret = process.env.JWT_SECRERT;  // This should be in an environment variable in a real application
const port = process.env.PORT;

await connectDb();

// // Define mongoose schemas
// const userSchema = new mongoose.Schema({
//   // userSchema here
// });

// const adminSchema = new mongoose.Schema({
// // adminSchema here
// });

// const courseSchema = new mongoose.Schema({
// // courseSchema here
// });

// Define mongoose models
// const User = mongoose.model('User', userSchema);
// const Admin = mongoose.model('Admin', adminSchema);
// const Course = mongoose.model('Course', courseSchema);

// const authMiddleware = (req, res, next) => {
// //  authMiddleware logic here 
// };

// // Connect to MongoDB
// mongoose.connect('<YourMongoDbConnectionString>'); 


// // Admin routes


// // User routes
// app.post('/users/signup', (req, res) => {
//     // logic to sign up user
// });

// app.post('/users/login', (req, res) => {
//     // logic to log in user
// });

// app.get('/users/courses', (req, res) => {
//     // logic to list all courses
// });

// app.post('/users/courses/:courseId', (req, res) => {
//     // logic to purchase a course
// });

// app.get('/users/purchasedCourses', (req, res) => {
//     // logic to view purchased courses
// });

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});