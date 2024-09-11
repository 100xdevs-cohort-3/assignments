const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/user.js");

const JWT_SECRET = "namaste"; // Include the secret for JWT in this file too

const users = [];

// Signup Route
router.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "signed up successfully"
    });
});

// Signin Route
router.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }
    if (!foundUser) {
        res.json({
            message: "wrong credentials"
        });
    } else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);

        res.header("token", token);

        res.json({
            token: token
        });
    }
});

// Route to get username and password after token verification
router.get("/getUserDetails", auth, (req, res) => {
    const username = req.username; // Extract username from token (set by auth middleware)

    // Find the user in the array
    const user = users.find(u => u.username === username);

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

module.exports = router; // Export
