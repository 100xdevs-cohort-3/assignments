// server.js
const express = require('express');
const app = express();
const data = require('./data.js');

app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// Endpoint to get quiz data
app.get('/quiz-data', (req, res) => {
  res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});