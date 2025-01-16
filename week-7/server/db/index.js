const mongoose = require("mongoose");

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  // userSchema here
});

const adminSchema = new mongoose.Schema({
  // adminSchema here
});

const courseSchema = new mongoose.Schema({
  // courseSchema here
});

// Define mongoose models
const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports = {
  User,
  Admin,
  Course,
};
