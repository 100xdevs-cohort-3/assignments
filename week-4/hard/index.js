const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.get("/healthy", (req, res) => res.send("I am Healthy"));

app.use("/user", userRoute);
app.use("/", todoRoute);

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
