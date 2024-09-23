const express = require('express');
const { Todo } = require("../db"); 
const { authenticateJwt } = require("../middleware/user"); 

const router = express.Router();
router.use(authenticateJwt);

router.post("/", async (req, res) => {
    const createPayload = req.body;
    console.log(req.userId);

    if (!createPayload.title) {
        return res.status(400).json({
            msg: "You sent the wrong inputs",
        });
    }

    try {
        // Save to MongoDB
        const newTodo = await Todo.create({
            title: createPayload.title,
            completed: false,
            userId: req.userId, 
        });

        res.status(201).json({
            msg: "Todo created",
            todo: newTodo, 
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error creating todo",
            error: error.message,
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId });

        res.json({
            todos: todos,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error fetching todos",
            error: error.message,
        });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params; 
    const updatePayload = req.body;

    // Basic input check
    if (typeof updatePayload.completed === 'undefined') {
        return res.status(400).json({
            msg: "You must provide a completed status.",
        });
    }

    try {
        const result = await Todo.updateOne(
            { _id: id }, 
            { completed: updatePayload.completed }
        );

        res.json({
            msg: "Todo marked as completed.",
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error updating todo.",
            error: error.message,
        });
    }
});


module.exports = router;
