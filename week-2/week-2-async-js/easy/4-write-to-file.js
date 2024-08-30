// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs')

const data = 'this has been written using node'

fs.writeFile('gen.txt', data, 'utf-8', (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(`file has been writeen`)
    }
})



