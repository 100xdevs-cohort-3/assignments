/**
 * 
 * 
## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.
 * 
 */
const fs = require("fs");

// *** expensive operation

function expensiveOperation() {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += Math.sqrt(i);
  }
  console.log("Expensive operation completed.");
}

// *** Asynchronously read the file and print its contents

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file :", err);
    return;
  }
  console.log("File Content");
  console.log(data);

  // expensiveOperation
  expensiveOperation();
});
