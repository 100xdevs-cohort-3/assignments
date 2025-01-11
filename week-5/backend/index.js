const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/", todoRoute);

app.listen(PORT, () => console.log("Server started on PORT 3000."));
