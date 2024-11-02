const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { z } = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const { User, Todo } = require('./database/index');
const auth = require('./middleware/user');

app.use(express.json());

app.get("/healthy", (req, res) => res.send("I am Healthy"));

// POST endpoint to signup
app.post('/signup', async (req, res) => {
    const requiredBody = z.object({
        username: z.string().min(3).max(32),
        email: z.string().min(5).max(50).email(),
        password: z.string().min(6).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/)
    });

    const requiredDataBody = requiredBody.safeParse(req.body);

    if (!requiredDataBody.success) {
        return res.status(403).json({
            msg: "Incorrect credential",
            error: requiredDataBody.error
        });
    }

    const { username, email, password } = req.body;

    const userExistOrNot = await User.findOne({ email });

    if (userExistOrNot) {
        return res.status(409).json({
            msg: `User already exists with this email: ${email}`
        });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({ username, email, password: hashPassword });
        res.status(201).json({ msg: "Account created successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// POST endpoint to signin
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(403).json({ msg: "Please provide email and password" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: `User does not exist with this email: ${email}` });
        }

        const passMatch = await bcrypt.compare(password, user.password);
        if (passMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            return res.status(200).json({ token });
        } else {
            return res.status(403).json({ msg: "Password is incorrect" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST endpoint to add todo
app.post('/todo', auth, async (req, res) => {
    const { description, completed } = req.body;
    const id = req.id;

    if (description === undefined || completed === undefined) {
        return res.status(400).json({ msg: "Please provide description and completed" });
    }

    try {
        await Todo.create({ description, complete: completed, userid: id });
        res.status(201).json({ msg: "Todo added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET endpoint to get all todos
app.get('/todos', auth, async (req, res) => {
    const id = req.id;

    try {
        const userTodos = await Todo.find({ userid: id });
        res.status(200).json(userTodos);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
