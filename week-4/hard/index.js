const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");

// Mount routes
app.use("/api/user", userRoutes);
app.use("/api/todos", todoRoutes);

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

