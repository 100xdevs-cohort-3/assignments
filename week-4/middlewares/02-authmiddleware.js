const express = require('express');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key';
app.use((req, res, next) => {
  if (req.get('100xdevs-api-key') !== VALID_API_KEY)
    return res.status(401).json({ message: 'Invalid or missing API key' });
  next();
});
app.get('/', (req, res) => res.json({ message: 'Access granted' }));
module.exports = app;
