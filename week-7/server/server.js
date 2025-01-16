//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const adminRoute = require("./routes/admin");
const usersRoute = require("./routes/users");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Admin routes
app.use("/admin", adminRoute);

// User routes
app.use("/users", usersRoute);

app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
