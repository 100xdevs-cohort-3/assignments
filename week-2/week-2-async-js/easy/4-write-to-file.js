const fs = require("fs");

console.log("start");
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(`file before ${data}`);
  let newData = "Venky Karanam";
  fs.writeFile("a.txt", newData, function (err, data) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log(`file after ${data}`);
    });
  });
});

console.log("end");
