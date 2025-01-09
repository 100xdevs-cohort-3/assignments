const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Define schemas
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  creator: mongoose.Types.ObjectId,
});

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  User,
  Todo,
};
