const fs = require("fs");

fs.readFile("filecleaner.txt", "utf-8", (err, data) => {
  const sentence = data.replace(/\s+/g, " ").trim();
  console.log(sentence);
});
