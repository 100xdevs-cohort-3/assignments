const express = require('express');
const Todo = require('../model/Todo');
const router = express.Router();
const authMiddleware = require('./authRoutes'); // Import auth middleware

// Create a new Todo (protected route)
router.post('/', authMiddleware, async (req, res) => {
    const todo = new Todo({
        task: req.body.task,
        userId: req.userId,
    });
    
    try {
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Todos (protected route)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId }); // Only get todos for the logged-in user
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a Todo (protected route)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a Todo (protected route)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;