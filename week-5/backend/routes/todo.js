//  start writing your code from here

const express = require("express");
const router = express.Router();
const auth = require("../middleware/user.js");

const todos = [];

router.post("/createTODO",auth,function(req,res){
    const task = req.body.task;
    const username = req.body.username;

    if(!task || !username){
        return res.status(401).json({
            message: "task and username required"
        })
    }
    todos.push({
        task : task,
        username : req.body.username
    })

    res.json({
        message: "added task successfully"
    })
})

router.post("/updateTODO", auth, function (req, res) {
    const { task, newTask } = req.body;
    const username = req.username; // From the auth middleware

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