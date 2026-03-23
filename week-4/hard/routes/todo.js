const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { Todo } = require("../database/index");
const router = Router();

// todo Routes
router.post('/', userMiddleware, async (req, res) => {
    // Implement todo creation logic
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    try {
        const newTodo = new Todo({
            title,
            userId: req.user._id,
            completed: false
        });

        await newTodo.save();

        res.status(201).json({
            message: "Todo created successfully",
            todo: newTodo
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating todo",
            error: error.message
        });
    }
});

router.put('/:id', userMiddleware, async (req, res) => {
    // Implement update todo logic
    const { id } = req.params;
    const { title, completed } = req.body;

    try {
        const todo = await Todo.findOne({ _id: id, userId: req.user._id });

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        if (title !== undefined) {
            todo.title = title;
        }

        if (completed !== undefined) {
            todo.completed = completed;
        }

        await todo.save();

        res.status(200).json({
            message: "Todo updated successfully",
            todo: todo
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating todo",
            error: error.message
        });
    }
});

router.delete('/', userMiddleware, async (req, res) => {
    // Implement delete all todos for user logic
    try {
        await Todo.deleteMany({ userId: req.user._id });
        res.status(200).json({
            message: "All todos deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting todos",
            error: error.message
        });
    }
});

router.delete('/:id', userMiddleware, async (req, res) => {
    // Implement delete todo by id logic
    const { id } = req.params;

    try {
        const todo = await Todo.findOneAndDelete({ _id: id, userId: req.user._id });

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            message: "Todo deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting todo",
            error: error.message
        });
    }
});


router.get('/', userMiddleware, async (req, res) => {
    // Implement fetching all todo logic
    try {
        const todos = await Todo.find({ userId: req.user._id });
        res.status(200).json({
            todos: todos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching todos",
            error: error.message
        });
    }
});

router.get('/:id', userMiddleware, async (req, res) => {
    // Implement fetching todo by id logic
    const { id } = req.params;

    try {
        const todo = await Todo.findOne({ _id: id, userId: req.user._id });

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            todo: todo
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching todo",
            error: error.message
        });
    }
});

module.exports = router;