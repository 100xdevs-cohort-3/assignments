const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks') 
  .version('0.8.0');

program.command('count')
  .description('Count the number of wordss in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
       fs.readFile(file, 'utf8', (err, data) => {
          if (err) { 
            console.log(err); 
          } else { 
           const lines = data.split('\n').length;

           console.log('There are ${lines) lines in ${file)');
           }
        });
     });


//if node -h it will give the helper function 
//same thing i want here and also count the no of words

program.command('count_sentences')
  .description('Count the number of wordss in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
       fs.readFile(file, 'utf8', (err, data) => {
          if (err) { 
            console.log(err); 
          } else { 
           let words=0;
           for(let i=0;i<data.length;i++){
            if(data[i]==="\n"){
              words++;
             }
           }
           console.log('There are ${lines) lines in ${file)');
           }
        });
     });
program.parse();
