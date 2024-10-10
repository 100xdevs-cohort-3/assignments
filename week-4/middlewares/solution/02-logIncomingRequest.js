const express = require('express');
const app = express();

// Middleware to log requests
function logRequests(req, res, next) {
    const log = `${req.method} ${req.url} - ${new Date().toISOString()}`;
    console.log(log);
    next(); // Pass to the next middleware or route handler
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
