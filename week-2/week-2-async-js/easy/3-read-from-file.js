const fs = require("fs");

fs.readFile("./3-read-from-file.md", "utf8", (err, data) => console.log(data));

counter = 0;
while (1) {
  if (counter === 1000000000) break;

  counter++;
}
