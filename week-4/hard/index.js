const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
dotenv.config();
//console.log(process.env.moongose_url)




const  { UserRouter } = require('./routes/user');
const { todoRouter } = require('./routes/todo');
const app = express();
app.use(express.json());

//app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use("/user", UserRouter);

app.use("/todo", todoRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(process.env.PORT);
}

main()
