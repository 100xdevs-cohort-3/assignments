// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp 
// to the console

const express = require('express');
const app = express();

const logger = (req, res, next) => {
const currentTimestamp = new Date().toISOString(); // Get the current timestamp
  console.log(`${req.method} ${req.url} ${currentTimestamp}`);
  next(); // Call the next middleware function in the stack
};

// Apply the middleware function to all routes
app.use(logger);

app.get('/hello-world', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
