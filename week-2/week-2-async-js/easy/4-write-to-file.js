const fs = require("fs");

fs.writeFile("./4-write-to-file.md", "Hello there.", (err) =>
  console.error(err)
);

let c;
for (let i = 0; i < 10000000000; i++) {
  c++;
}
