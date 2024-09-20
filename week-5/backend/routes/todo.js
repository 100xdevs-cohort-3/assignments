const express = require("express");
const router = express.Router();
const auth = require("../middleware/user.js");

const todos = [];

// Create TODO Route
router.post("/createTODO", auth, function(req, res) {
    const task = req.body.task;
    const username = req.username; // From the auth middleware

    // Validate task and username
    if (!task || !username) {
        return res.status(400).json({
            message: "Task and username required"
        });
    }

    todos.push({
        task: task,
        username: username
    });

    res.json({
        message: "Task added successfully"
    });
});

// Update TODO Route
router.post("/updateTODO", auth, function (req, res) {
    const { task, newTask } = req.body;
    const username = req.username; // From the auth middleware

    // Find the task associated with the authenticated user
    let foundTodo = null;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].task === task && todos[i].username === username) {
            foundTodo = todos[i];
            foundTodo.task = newTask; // Update the task
            break;
        }
    }

    if (foundTodo) {
        res.json({
            message: "Task updated successfully",
            updatedTask: newTask
        });
    } else {
        res.status(404).json({
            message: "Task not found or you are not authorized to update it"
        });
    }
});

module.exports = router;
