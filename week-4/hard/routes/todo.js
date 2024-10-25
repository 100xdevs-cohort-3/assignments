const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database/index"); // Import the model properly
const router = Router();

// Create a new todo
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    return res.status(201).json({ newTodo });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong', error: err });
  }
});

// Update a todo
router.put('/:id', adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ updatedTodo });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update todo', error: err });
  }
});

// Delete all todos
router.delete('/', adminMiddleware, async (req, res) => {
  try {
    const result = await Todo.deleteMany();
    return res.status(200).json({ message: "All todos deleted", result });
  } catch (err) {
    return res.status(500).json({ message: "Failed to delete all todos", error: err });
  }
});

// Delete todo by ID
router.delete('/:id', adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return res.status(200).json({ deletedTodo });
  } catch (err) {
    return res.status(500).json({ message: "Failed to delete todo by ID", error: err });
  }
});

// Get all todos
router.get('/', adminMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({ todos });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch todos", error: err });
  }
});

// Get todo by ID
router.get('/:id', adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    return res.status(200).json({ todo });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch todo by ID", error: err });
  }
});

module.exports = router;
