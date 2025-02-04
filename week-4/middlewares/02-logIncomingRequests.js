//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`)
    next()
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
