//write the contents to a file
//by this method we over write the contents in the file 

const data = "we are writing this to a file";
const fs = require("fs");

fs.writeFile("a.txt", data, function(err){
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File written successfully");
    }
});


