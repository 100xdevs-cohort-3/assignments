const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const adminRoute = require("./routes/admin");
const usersRoute = require("./routes/users");

const app = express();
const port = process.env.PORT;

app.use(express.json());


async function main() {
  // Connect to MongoDB
  await mongoose.connect(process.env.MONGO_URL);
  // Admin routes
  app.use("/admin", adminRoute);

  // User routes
  app.use("/users", usersRoute);

  app.listen(port, () => {
    console.log("Server is listening on port 3000");
  });
}

main()