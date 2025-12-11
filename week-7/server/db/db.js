// Define mongoose schemas

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
  // userSchema here
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new mongoose.Schema({
  // adminSchema here
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new mongoose.Schema({
  // courseSchema here
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new mongoose.Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

// Define mongoose models
const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);
const Purchase = mongoose.model("Purchase", purchaseSchema);

const authMiddleware = (req, res, next) => {
  //  authMiddleware logic here
};

module.exports = {
  User,
  Admin,
  Course,
  Purchase,
};
