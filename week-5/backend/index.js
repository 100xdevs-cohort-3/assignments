// start writing from here

import express from 'express';
import dotenv from 'dotenv'
import { ConnectDb } from './db/index.js';
import cors from 'cors'


import userRouter from './routes/user.js'
import todoRouter from './routes/todo.js'
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

dotenv.config();
await ConnectDb();

app.use(cors());
app.use(express.json());

// Routes
app.use("/todo", todoRouter);
app.use("/user", userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})