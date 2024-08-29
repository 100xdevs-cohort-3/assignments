const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

let todos = [];

// Load existing To-Dos from the file when the server starts
fs.readFile('todos.json', 'utf-8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            // If the file doesn't exist, we'll start with an empty array
            console.log('No existing todos found, starting fresh.');
            todos = [];
        } else {
            console.error('Error reading todos.json:', err);
        }
    } else {
        todos = JSON.parse(data);
        console.log('Loaded todos from file:', todos);
    }
});

// Helper function to write todos to file
function writeTodosToFile(res, successStatusCode, successMessage) {
    fs.writeFile('todos.json', JSON.stringify(todos, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Internal Server Error');
        }
        res.status(successStatusCode).send(successMessage);
    });
}

app.post('/todos', function (req, res) {
    const { description, completed } = req.body;
    const newTodo = { id: todos.length + 1, description, completed };
    
    const existingTodo = todos.find(todo => todo.description === description);

    if (existingTodo) {
        return res.status(409).send('To-Do item already exists');
    }
    
    todos.push(newTodo);
    writeTodosToFile(res, 201, newTodo);
});

app.put('/todos', function (req, res) {
    const { id, description, completed } = req.body;
    const toDo = todos.find(t => t.id === parseInt(id));

    if (!toDo) {
        return res.status(404).send('To-Do item not found');
    }

    toDo.description = description;
    toDo.completed = completed;
    writeTodosToFile(res, 200, toDo);
});

app.delete('/todos', function (req, res) {
    const { id } = req.body;
    const toDoIndex = todos.findIndex(t => t.id === parseInt(id));

    if (toDoIndex === -1) {
        return res.status(404).send('To-Do item not found');
    }

    todos.splice(toDoIndex, 1);

    // Reassign IDs to maintain sequential order
    todos.forEach((t, index) => {
        t.id = index + 1;
    });

    writeTodosToFile(res, 200, 'To-Do item deleted successfully');
});

app.get('/todos', function(req, res){
    fs.readFile('todos.json', 'utf-8', function(err, data){
        if (err) {
            console.error('Error while reading from file', err);
            return res.status(500).send('Internal Server Error');
        }
        res.status(200).json(JSON.parse(data));
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
