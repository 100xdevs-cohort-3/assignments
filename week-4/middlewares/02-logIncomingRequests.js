const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.originalUrl + ' - ' + new Date().toISOString());
  next();
});
app.get('/', (req, res) => res.json({ message: 'Hello, world!' }));
module.exports = app;
