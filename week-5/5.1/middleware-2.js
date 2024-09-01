// 2. Create a middleware that counts total number of requests sent to a server. 
// Also create an endpoint that exposes it

const express = require('express');
const app = express();

// Initialize a counter to store the number of requests
let requestCount = 0;

// Middleware to count requests
app.use((req, res, next) => {
    requestCount++;
    next(); // Proceed to the next middleware or route handler
});

// Route to get the total number of requests
app.get('/request-count', (req, res) => {
    res.json({ totalRequests: requestCount });
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
