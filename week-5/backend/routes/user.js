const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/user.js");

const JWT_SECRET = "namaste"; // Include the secret for JWT in this file too

const users = [];



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

        res.header("jwt", token);
        res.header("random", "dhruv");

        res.json({
            token: token
        });
    }
});

module.exports = router; // Export
