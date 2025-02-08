const fs = require("fs");

const data = "Hello 100Xdev members nice to meet you";

fs.writeFile("b.txt", data, "utf-8", (err) => {
  if (err) {
    throw new Error("File cannot be created " + err);
  }
  console.log("File has been created");
});
