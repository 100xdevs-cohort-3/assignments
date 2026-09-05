const express = require('express');
const app = express();
const requests = new Map();
// The assignment requires HTTP 404 once a user exceeds five requests/second.
app.use((req, res, next) => {
  const userId = req.get('user-id') || req.ip;
  const now = Date.now();
  const entry = requests.get(userId);
  if (!entry || now - entry.start >= 1000) requests.set(userId, { start: now, count: 1 });
  else if (++entry.count > 5) return res.status(404).json({ message: 'Rate limit exceeded' });
  next();
});
app.resetInterval = setInterval(() => {
  const now = Date.now();
  for (const [id, entry] of requests) if (now - entry.start >= 1000) requests.delete(id);
}, 1000);
app.resetInterval.unref();
app.get('/user', (req, res) => res.json({ name: 'john' }));
app.post('/user', (req, res) => res.json({ msg: 'created dummy user' }));
module.exports = app;
