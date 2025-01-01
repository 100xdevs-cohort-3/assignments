require('dotenv').config()
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MongoDB_Url);

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    email: {type: String},
    password: {type: String},
    firstName: {type: String},
    lastName: {type: String}
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title: {type: String},
    description: {type: String},
    done: {type: Boolean},
    userId: {type: mongoose.Types.ObjectId, ref: 'User'}
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}