const fs = require("fs");

fs.readFile("1-file-cleaner.md", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  
  var cleanedData = data.replace(/\s+/g, " ").trim();

  fs.writeFile("1-file-cleaner.md", cleanedData, (err) => {
    if (err) {
      console.log("Error writing to file:", err);
    } else {
      console.log("File cleaned successfully!");
    }
  });
});
