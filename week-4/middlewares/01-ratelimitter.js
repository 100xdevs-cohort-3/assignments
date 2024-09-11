const express = require('express');
const app = express();

let numberOfRequestsForUser = {};

// Clears the request count for each user every second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

// Rate limiting middleware
app.use((req, res, next) => {
    const userId = req.headers['user-id'];

    if (!userId) {
        return res.status(400).json({ error: 'User ID missing in headers' });
    }

    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 0;
    }

    numberOfRequestsForUser[userId]++;

    if (numberOfRequestsForUser[userId] > 5) {
        return res.status(404).json({ error: 'Too many requests' });
    }

    next();
});

app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
