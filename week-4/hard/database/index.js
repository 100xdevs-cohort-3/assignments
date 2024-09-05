const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}