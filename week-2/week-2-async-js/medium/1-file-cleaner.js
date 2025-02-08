// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const fs = require("fs");
const path = require("path");

// Define the paths for the input and output files
const path1 = path.resolve(__dirname, "file-cleaner.txt");
const path2 = path.resolve(__dirname, "cleaned-file.txt");

// Read the file, convert it to a string, and clean up the whitespace
const string1 = fs.readFileSync(path1, "utf8").replace(/\s+/g, " ");

// Write the cleaned string to the output file
fs.writeFileSync(path2, string1);
