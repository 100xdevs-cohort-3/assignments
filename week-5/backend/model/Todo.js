const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
});

module.exports = mongoose.model('Todo', todoSchema);