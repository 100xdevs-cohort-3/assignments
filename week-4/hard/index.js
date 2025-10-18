import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js";
import { connectDb } from "./database/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here

app.use("/api/users", userRouter);
app.use("/api/todo", todoRouter);

connectDb(); // Ensure DB is connected before listening

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

