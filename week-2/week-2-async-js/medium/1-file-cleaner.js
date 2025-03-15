const fs = require("fs");
fs.readFile("a.txt", "utf-8", (err, data) => {
  const newData = data.replace(/\s+/g, " ");
  fs.writeFile("a.txt", newData, (err) => {
    if (err) {
      console.log("Failed to update the data");
    } else {
      console.log("The Data is updated!");
      console.log(newData);
    }
  });
});
