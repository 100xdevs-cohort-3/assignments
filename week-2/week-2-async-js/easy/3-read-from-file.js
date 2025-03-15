const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

let i = 0;
while (true) {
  if (i >= 100000000) break;
  i++;
}
console.log("Done");
