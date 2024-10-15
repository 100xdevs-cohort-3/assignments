const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose")

//console.log(process.env.moongose_url)

const UserRouter = require('./routes/user');
const todoRouter = require('./routes/todo');
const app = express();
app.use(express.json());


//  start writing your routes here
app.use("/user", UserRouter);

app.use("/todo", todoRouter);

async function main() {
    await mongoose.connect(process.env.moongose_url)
    app.listen(process.env.PORT);
}

main()
