//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const { connectToDatabase } = require("./db/db");
dotenv.config();
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
const app = express();

app.use(cors());
app.use(express.json());

const secret = process.env.JWT_SECRET; // This should be in an environment variable in a real application
const PORT = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  // Connect to MongoDB
  mongoose.connect(process.env.MONGO_URI);
  console.log(`Server running on port ${PORT}`);
});
