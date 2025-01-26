const fs = require('fs');

let data = "I am Rohit Rana";
fs.writeFile('test.txt', data, (err) => {
    if (err) {
        console.log("Error writing file:", err);
    } else {
        console.log("File written successfully!");
    }
});
fs.readFile('test.txt','utf-8',(data,err)=>{
               if(err){
                              console.log(err);
               }
               else{
                              console.log(data);
               }
})