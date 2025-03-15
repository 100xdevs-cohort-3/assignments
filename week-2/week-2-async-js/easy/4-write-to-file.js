const fs = require("fs");
fs.writeFile("a.txt", "The new world is not good!", (err) => {
  if (err) {
    console.log("File was Not written");
  } else {
    console.log("File was written successfully");
    fs.readFile("a.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  }
});
