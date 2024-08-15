// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const data = "Hello world";

fs.writeFile("writeFile.txt", data, "utf-8", (err) => {
  if (err) {
    throw new Error("File cannot be created " + err);
  }
  console.log("File has been created");
});
