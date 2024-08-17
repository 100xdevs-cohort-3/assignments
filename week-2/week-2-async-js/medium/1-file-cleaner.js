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
const fs=require('fs')
async function  fileclean(){
    const contents=await fs.promises.readFile("text3.txt","utf-8",(error,content)=>{
        if(error){
            console.log(error);
        }
    })
    let result=contents.replace(/\s+/g,' ').trim();
    console.log(result);

    const updated=await fs.promises.writeFile("text3.txt",result,(error,result)=>{
        if(error){
            console.log(error);
        }
    })
}

fileclean();