## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const data = "This is the content to be written to file 2 using programming";

const fs = require("fs");

fs.writeFile("file2.txt", data, "utf8", (err) => {
if (err) {
console.error("Error writing this file", err);
return;
}
console.log("File has been written successfully!");
});
