const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  let validData = data.replace(/\s+/g, " ").trim();

  fs.writeFile("a.txt", validData, function (err, data) {
    if (!err) {
      console.log("file updated successfully");
    }
  });
});
