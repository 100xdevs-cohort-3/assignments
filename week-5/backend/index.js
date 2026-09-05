require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db');
const app = express();
app.use(cors());
app.use(express.json({ limit: '32kb' }));
app.get('/healthy', (req, res) => res.json({ status: 'ok' }));
app.use('/user', require('./routes/user'));
app.use('/todo', require('./routes/todo'));
app.use('/todos', require('./routes/todo'));
app.use(express.static(require('node:path').join(__dirname, '../frontend')));
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  const status =
    error.status ||
    (error.code === 11000
      ? 409
      : ['ValidationError', 'CastError'].includes(error.name)
        ? 400
        : 500);
  res
    .status(status)
    .json({
      message:
        status === 409
          ? 'Username already exists'
          : status === 500
            ? 'Server error'
            : error.message,
    });
});
async function start() {
  if (!process.env.JWT_SECRET) throw new Error('Set JWT_SECRET in .env');
  await connectToDatabase();
  const port = Number(process.env.PORT) || 3002;
  return app.listen(port, () => console.log('Taskify: http://localhost:' + port));
}
if (require.main === module)
  start().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
module.exports = { app, start };
