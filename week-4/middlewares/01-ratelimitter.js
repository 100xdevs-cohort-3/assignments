// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

let resetInterval;

app.use((req, res, next) => {
  const userId = req.header('user-id');

  if (!userId) {
    return res.status(404).json({ error: "user-id required" });
  }

  const currentTime = Math.floor(Date.now() / 1000);

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

  if (userData.count > 5) {
    return res.status(404).json({ error: 'Too many requests' });
  }

  next();
})

resetInterval = setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000)

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.resetInterval = resetInterval;
module.exports = app;