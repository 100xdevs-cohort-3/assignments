const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Todo } = require("../database/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            message: "Please provide name, email and password"
        });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
});

router.post('/login', async (req, res) => {
    // Implement user login logic
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message: "Please provide email and password"
        });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({
                message: "User not found"
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({
            message: "Login successful",
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error logging in",
            error: error.message
        });
    }
});

router.get('/todos', userMiddleware, async (req, res) => {
    // Implement logic for getting todos for a user
    try {
        const todos = await Todo.find({ userId: req.user._id });
        res.status(200).json({
            todos: todos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching todos",
            error: error.message
        });
    }
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic - client should remove token
    res.status(200).json({
        message: "Logout successful"
    });
});

module.exports = router