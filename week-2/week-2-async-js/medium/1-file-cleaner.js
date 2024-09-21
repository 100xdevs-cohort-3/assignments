// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')
const data = `    this  is     having way    too  many   extra      spaces   `
fs.writeFileSync('sample.txt', data, 'utf-8')


let content = fs.readFileSync('sample.txt', 'utf-8')
let ans = ''
for(let i = 0; i < content.length; i++){
    let hasSpace = false;
    while(i < content.length && content[i] == ' '){
        i++;
        hasSpace = true;
    }
    if(hasSpace){
        ans += ' ';
    }
    if(i < content.length){
        ans += content[i];
    }
}

ans = ans.trim()

fs.writeFileSync('result.txt', ans,'utf-8')