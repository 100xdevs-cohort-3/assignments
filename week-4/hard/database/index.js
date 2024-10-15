const mongoose = require('mongoose');

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    email: String,
    password: String,
    name: String
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    text: String,
    Priority: String,
    Progress: String
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}