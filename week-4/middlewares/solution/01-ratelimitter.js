const express = require('express');
const app = express();

// This object will hold the count of requests per user
let numberOfRequestsForUser = {};

// Store the interval ID so we can clear it in tests
let resetInterval;

// Middleware to rate limit based on user-id
app.use((req, res, next) => {
  const userId = req.header('user-id');

  if (!userId) {
    return res.status(400).json({ error: 'user-id is required' });
  }

  const currentTime = Math.floor(Date.now() / 1000); // Current second timestamp

  // Initialize user data if not already present
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = { count: 0, lastRequestTime: currentTime };
  }

  const userData = numberOfRequestsForUser[userId];

  if (currentTime === userData.lastRequestTime) {
    userData.count += 1;
  } else {
    userData.count = 1;
    userData.lastRequestTime = currentTime;
  }

  // Limit to 5 requests per second
  if (userData.count > 5) {
    return res.status(404).json({ error: 'Too many requests' });
  }

  // Continue to next middleware/route handler
  next();
});

// Reset the numberOfRequestsForUser every second
resetInterval = setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

// Routes
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

// Expose the interval to clear it in tests
app.resetInterval = resetInterval;

module.exports = app;
