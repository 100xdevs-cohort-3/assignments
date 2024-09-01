// 2. Create a middleware that counts total number of requests sent to a server. 
// Also create an endpoint that exposes it

const express = require('express');
const app = express();


let requestCount = 0;

// Middleware to count requests
app.use((req, res, next) => {
    requestCount++;
    next(); // Proceed to the next middleware or route handler
});


app.get('/request-count', (req, res) => {
    res.json({ totalRequests: requestCount });
});


app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.listen(3000);
