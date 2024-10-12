const { Router } = require("express");
const userRouter = Router();
const { userMiddleware } = require("../middleware/user");
const { User, Todo } = require("../database/index")
// User Routes
userRouter.post('/signup', (req, res) => {
    // Implement user signup logic
    const { email, password, name } = req.body;
    try {
        User.create({
            email,
            password,
            name
        })
    } catch (e) {
        console.error("error is", e)
    }

    res.json({
        message: "signup succed"
    })
});

userRouter.post('/login', (req, res) => {
    // Implement user login logic
});

userRouter.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

userRouter.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = userRouter