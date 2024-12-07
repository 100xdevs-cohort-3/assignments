
const fs = require('fs')

fs.readFile('easy/example.txt', 'utf-8',(err, data)=>{
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

// expensive operation
function expensiveOperation() {
    let sum = 0
    for (let i = 0; i < 1e8; i++) {
        sum += i;
        
    }
    console.log("Expensive operation done");
    
}

expensiveOperation()