const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
const {user}= require("./db/index")
const {UserRouter} = require("./routes/user");
const {TodoRouter} = require("./routes/todo");

app.use(express.json());


app.use("/users",UserRouter);
app.use("/todos",TodoRouter); 






async function main(){
   await  mongoose.connect(MONGO_URI);
   app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
   })
    


}


main();



