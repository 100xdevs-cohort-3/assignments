const fs = require("fs");

const data =
  "Reprehenderit minim anim sunt incididunt amet culpa ut Lorem laboris Lorem. Nisi labore in esse deserunt tempor sint ex exercitation. Veniam sint incididunt do aute dolore. Aliquip proident non id ipsum officia ad eiusmod aliquip consequat est duis commodo commodo laboris.";

fs.writeFile("./easy/solutions/4-write-to-file-test.txt", data, (err) => {
  if (err) throw err;
  console.log(data);
});
