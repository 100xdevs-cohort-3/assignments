/*
In this I createad a todo server hard by storing data in the  files instead of an array.
*/

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 3000;

let todos, mkdir = '/Users/anshgupta/Desktop/assignments/week-4';

try {
    const data = fs.readFileSync(path.join(mkdir, 'todos.json'), 'utf-8');
    todos = data? JSON.parse(data) : [];
}
catch(err) {
    console.error(`Error in reading the file: ${err}`);
}


app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex((todo) => {
        return todo.id === id;
    });
    if(index === -1) {
        res.status(404).json({message: 'Not found'})
    }

    else {
        res.status(200).json(todos[index]);
    }
});

app.post('/todos', (req, res) => {
    let todo = {
        id: Math.floor(Math.random()*1000),
        title: req.body.title,
        description: req.body.description
    }
    todos.push(todo);
    fs.writeFile(path.join(mkdir, 'todos.json'), JSON.stringify(todos), (err) => {
        if(err) console.error(`Error in writing to file: ${err}`);
        else res.status(201).json({id: todo.id});
    })
});

app.put('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex((todo) => {
        return todo.id === id;
    });
    if(index === -1) {
        res.status(404).json({message: 'Not found'});
    }
    else {
        todos[index] = {
            id: id,
            title: req.body.title,
            description: req.body.description
        };
        fs.writeFile(path.join(mkdir, 'todos.json'), JSON.stringify(todos), (err) => {
            if(err) console.error(`Error in writing to file: ${err}`);
            else res.status(200).json({message: 'Found and updated'});
        })
        
    }
});

app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex((todo) => {
        return todo.id === id;
    });
    if(index === -1) res.status(404).json({message: 'Not found'});
    else {
        todos.splice(index, 1);
        fs.writeFile(path.join(mkdir, 'todos.json'), JSON.stringify(todos), (err) => {
            if(err) console.error(`Error in writing to file: ${err}`);
            else res.status(200).json({message: 'Deleted'});
        })
        
    }
});

app.listen(port, () => {
    console.log(`todo app is listening on port: ${port}`);
})