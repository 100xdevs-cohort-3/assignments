const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error("File cannot be read " + err);
  }
  console.log(data);
});

for (let i = 0; i < 10000000000; i++) {
  i += 1;
}
