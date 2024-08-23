const fs = require("fs");

const fileOperation = () => {
  fs.readFile(
    "./medium/solutions/1-file-cleaner-in.txt",
    "utf-8",
    (err, data) => {
      if (err) throw err;
      let newData = data
        .split(" ")
        .filter((string) => string) // remove array items with only spaces
        .join(" ");
      fs.writeFile(
        "./medium/solutions/1-file-cleaner-out.txt", // check this file for output
        newData,
        (err) => {
          if (err) throw err;
          console.log("Write Completed!!"); // classic example of callback hell or pyramid of doom :(
        }
      );
    }
  );
};

fileOperation();
