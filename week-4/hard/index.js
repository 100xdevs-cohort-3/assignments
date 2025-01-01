const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());



//  start writing your routes here

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));



