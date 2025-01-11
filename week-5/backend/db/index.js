const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  creator: mongoose.Types.ObjectId,
  createdAt: Number,
});

const User = mongoose.model("user", UserSchema);
const Todo = mongoose.model("todo", TodoSchema);

module.exports = { User, Todo };
