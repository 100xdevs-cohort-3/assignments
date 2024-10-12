const { Router } = require("express");
const { adminMiddleware } = require("../middleware/user");
const todoRouter = Router();

// todo Routes
todoRouter.post('/', (req, res) => {
    // Implement todo creation logic
});

todoRouter.put('/', adminMiddleware, (req, res) => {
    // Implement update todo  logic
});

todoRouter.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

todoRouter.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


todoRouter.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

todoRouter.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = todoRouter;