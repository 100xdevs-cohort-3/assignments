const fs = require("fs");

function readFile() {
  fs.readFile("./easy/1-counter.md", "utf-8", function (err, data) {
    console.log(data);
  });
  // for (let i = 0; i < 10000000000; i++) {} // doing this expensive operation blocks the call stack preventing the callback function from executing
}

readFile();
