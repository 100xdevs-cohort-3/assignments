import { Router } from "express";
import  userMiddleware  from "../middleware/user.js";
import { User, Todo } from "../database/index.js";

const todoRouter = Router();

// todo Routes
todoRouter.post('/', async(req, res) => {
    // Implement todo creation logic
  try {
    const { title, description } = req.body;

    if (!title || typeof title !== "string") {
      return res.status(400).json({ message: "Title is required and must be a string." });
    }

    const todo = await Todo.create({
      title,
      description: description || "",
      userId: req.user.id,
      completed: false,
    });

    res.status(201).json({ message: "Todo created successfully.", todo });
  } catch (err) {
    console.error("❌ Create Todo Error:", err.message);
    res.status(500).json({ message: "Failed to create todo." });
  }
});

todoRouter.put('/', userMiddleware, async(req, res) => {
    // Implement update todo  logic
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { title, description, completed },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found or unauthorized." });
    }

    res.json({ message: "Todo updated successfully.", todo });
  } catch (err) {
    console.error("❌ Update Todo Error:", err.message);
    res.status(500).json({ message: "Failed to update todo." });
  }
});

todoRouter.delete('/', userMiddleware, async(req, res) => {
    // Implement delete todo logic
  try {
    const result = await Todo.deleteMany({ userId: req.user.id });
    res.json({ message: `${result.deletedCount} todos deleted successfully.` });
  } catch (err) {
    console.error("❌ Delete Todos Error:", err.message);
    res.status(500).json({ message: "Failed to delete todos." });
  }

});

todoRouter.delete('/:id', userMiddleware, async(req, res) => {
    // Implement delete todo by id logic
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: id, userId: req.user.id });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found or unauthorized." });
    }

    res.json({ message: "Todo deleted successfully." });
  } catch (err) {
    console.error("❌ Delete Todo Error:", err.message);
    res.status(500).json({ message: "Failed to delete todo." });
  }
});

todoRouter.get('/', userMiddleware, async(req, res) => {
    // Implement fetching all todo logic
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json({ todos });
  } catch (err) {
    console.error("❌ Fetch Todos Error:", err.message);
    res.status(500).json({ message: "Failed to fetch todos." });
  }
});

todoRouter.get('/:id', userMiddleware, async(req, res) => {
    // Implement fetching todo by id logic
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id, userId: req.user.id });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found or unauthorized." });
    }

    res.json({ todo });
  } catch (err) {
    console.error("❌ Fetch Todo Error:", err.message);
    res.status(500).json({ message: "Failed to fetch todo." });
  }
});

export default todoRouter;









