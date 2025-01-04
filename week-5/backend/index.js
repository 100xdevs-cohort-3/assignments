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
const path = require("path");
const cors = require("cors")
const filepath = path.join(__dirname , "../frontend");
console.log(filepath);
app.use(cors())
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



