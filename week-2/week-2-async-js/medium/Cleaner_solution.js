const fs = require('fs');


 const cleanFile = (filePath) =>{
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            console.log("error in file",err);
            return;
        }

        const cleanedContent = data.replace(/\s+/g, ' ').trim();
        
        fs.writeFile(filePath,cleanedContent, 'utf-8',(err) =>{
            if(err){
                console.log("erro in writing",err);
                return;
            }
            console.log('File cleaned SuccessFully');
        });
    });
 };

 const filePath = 'solution.txt';
 cleanFile(filePath);

