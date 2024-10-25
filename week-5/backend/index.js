const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbConnect = require('./db/index');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todo');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB
dbConnect();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});