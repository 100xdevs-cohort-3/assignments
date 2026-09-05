const express = require('express');
const app = express();
let requestCount = 0;
app.use((req, res, next) => {
  requestCount++;
  next();
});
app.get('/user', (req, res) => res.json({ name: 'john' }));
app.post('/user', (req, res) => res.json({ msg: 'created dummy user' }));
app.get('/requestCount', (req, res) => res.json({ requestCount }));
module.exports = app;
