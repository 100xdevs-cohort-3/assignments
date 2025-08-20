const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(`Before clening: \n${data}`);
    cleanFile(data);    
})

function cleanFile(content){
    content = content.replace(/\s{2,}/g, ' ')
    fs.writeFile('a.txt', content, 'utf-8', () => {
        console.log('File cleaned!');
        fs.readFile("a.txt", "utf-8", (err, data) => {
            console.log(data);
        });
        
    })
}