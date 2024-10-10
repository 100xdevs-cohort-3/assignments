const express = require('express');
const cors = require('cors');
const todoRouter = require("./routes/todo");
const userRouter = require("./routes/user");
const { connectToDatabase } = require("./db");
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/todo", todoRouter);
app.use("/user", userRouter);

// Establish a connection to the MongoDB database
connectToDatabase().then(() => {
    const PORT = process.env.PORT || 3000; 
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
