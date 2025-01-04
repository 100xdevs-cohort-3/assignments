const fs = require("fs");

function cleanFile(filepath, encoding) {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) return err;

    const cleanedData = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filepath, cleanedData, (err) => {
      if (err) console.error(err);
    });

    console.log("Cleaned file successfulyy.");
  });
}

cleanFile("./a.txt", "utf-8");
