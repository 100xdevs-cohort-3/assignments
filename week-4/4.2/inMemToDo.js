const express = require('express');
const app = express()
app.use(express.json());

let todos = [];

app.get('/todos', function (req, res) {
  res.json(todos);
});

app.post('/todos', function (req, res) {
    const { description } = req.body; // Accessing the 'description' from req.body
    const newTodo = { id: todos.length + 1, description: description, completed: false };
    todos.push(newTodo);    
    res.json(newTodo);
});


app.put('/todos/:id', function (req, res) {
    const id = parseInt(req.params.id); // Extract and parse the ID from req.params
    const { completed, description } = req.body; // Destructure completed and description from req.body

    const toDo = todos.find(t => t.id === id);
    
    if (toDo) {
        if (description !== undefined) {
            toDo.description = description;
        }
        if (completed !== undefined) {
            toDo.completed = completed;
        }
        res.json(toDo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});


app.delete('/todos/:id', function (req, res) {

    const id = req.params;
    const todoIndex = todos.findIndex(t => t.id === parseInt(id));

    if (todoIndex !== -1) {
        // Remove the todo
        todos.splice(todoIndex, 1);

        // Reassign IDs to keep them sequential
        todos.forEach((todo, index) => {
            todo.id = index + 1;
        });
        
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }

});

app.listen(3000);