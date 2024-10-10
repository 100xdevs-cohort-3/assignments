Create an Express HTTP server in Node.js to handle a `file-based` To-Do list app with users and storing tasks in a `todos.json` file.

Each To-Do has a unique auto-generated Id, a title, and a description. 

The title is a string and the description is a string.

For example:
```json
// todos.json
{
  "1": {
    "todos": [
      {
        "id": 1,
        "title": "Task 1",
        "description": "Go to Gym"
      },
      {
        "id": 2,
        "title": "Task 2",
        "description": "Attend 100xDevs Class"
      }
    ]
  },
  "2": {
    "todos": [
      {
        "id": 3,
        "title": "Task 1",
        "description": "Finish Assignment"
      },
      {
        "id": 4,
        "title": "Task 2",
        "description": "Practice"
      }
    ]
  },
  "3": {
    "todos": []
  }
}
```