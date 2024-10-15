const { Router } = require("express");
const { User } = require("../database/index")
const jwt = require("jsonwebtoken");
const { JWT_USER } = require("../config")
const { userMiddleware } = require("../middleware/user");
const userRouter = Router();
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

userRouter.post('/login', async function (req, res) {
    // Implement user login logic
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,
            password
        })

        if (user) {
            const token = jwt.sign({
                id: user._id
            }, JWT_USER);

            res.json({
                token: token
            })
        }
    } catch (error) {
        res.status(403).json({
            message: "incorrect credentials"
        })

    }

    res.json({
        message: "you are signin"
    })

});

userRouter.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

userRouter.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = userRouter