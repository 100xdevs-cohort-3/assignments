You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.

Try to save responses in a files(`todos.json`) with users, so that even if u exit from the app and run it again, the data remains (similar to databases).

Example:
```json
// todos.json
let users = {
    1: {
        todos: [
            {
                id: 1,
                title: "Task 1"
            },
            {
                id: 2,
                title: "Task 2"
            }
        ]
    }, 
    2: {
        todos: [
            {
                id: 5,
                title: "Go to gym"
            },
            {
                id: 6,
                title: "Attent 100xDev Class"
            }
        ]
    }, 
    3: {
        todos: []
    }
}
```