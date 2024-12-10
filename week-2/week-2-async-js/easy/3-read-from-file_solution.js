const fs = require("fs");

fs.readFile("week-2-async-js/easy/3_read.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});



function expensiveOperation() {
    let x = 0;
    for (let i = 0; i < 100000; i++) {
        x++;
    }
    console.log("Expensive operation");
}

expensiveOperation();
