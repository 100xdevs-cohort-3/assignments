// start writing from here

const http=require('http');
const express=require('express');
require('dotenv').config();
const userRouter=require("./routes/user.js");
const todoRouter=require("./routes/todo.js");
const cors=require('cors');
const PORT=process.env.PORT;
const app=express();
const server=http.createServer(app);
app.use(cors())
app.use(express.json());
app.use('/user',userRouter)
app.use("/todo",todoRouter)

server.listen(PORT,()=>{console.log(`Server running on PORT ${PORT}`);
})

