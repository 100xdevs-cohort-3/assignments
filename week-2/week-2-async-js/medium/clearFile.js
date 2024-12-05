
const fs = require('fs')


function ClearFile(filePath) {
    fs.readFile(filePath,'utf8', (err, data)=>{
      if (err) {
        console.log('Error during reading',err);
        return;
      }
      const cleareddata = data.replace(/\s+/g, ' ').trim()

      fs.writeFile(filePath,cleareddata,'utf8',(err)=>{
        if (err) {
            console.log('Error during writing the file',err);
            return;
        }
        console.log('Writing file successfull');
        
      })

    });
}

let  filePath = 'medium/example.txt'
 ClearFile(filePath)
