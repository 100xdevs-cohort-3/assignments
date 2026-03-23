const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/week-4');

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
    
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type:String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}