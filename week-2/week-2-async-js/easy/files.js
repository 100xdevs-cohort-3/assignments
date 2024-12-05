
const fs = require('fs')

fs.readFile('example.txt', 'utf-8',(err, data)=>{
     if (err) {
        if (err.code == 'ENOENT') {
            console.log("File not found",err);
            
        } else {
            console.log("Error during reding",err);
            
        }
        return;
     }

    console.log("File Content : ",data);
    
});

