const express = require('express');

const app = express();
let requestCount = 0;

// Global middleware to log requests
app.use((req, res, next) => {
  requestCount += 1; // Increment the request count for every incoming request
  next(); // Pass control to the next middleware or route handler
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;
