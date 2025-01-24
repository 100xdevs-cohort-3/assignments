require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("listening on port 3000");
  app.listen(3000);
};

main();
