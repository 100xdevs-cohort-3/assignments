const fs = require('fs');
// const fs = require('fs').promises;


function readFileAsync(filename, encoding){

  return new Promise((resolve, reject)=>{
    fs.readFile(filename, encoding, (err,data)=>{
      if(err){
        return reject(err);
      }
      resolve(data);
    })
  })

}

function writefileAsync(filename, data){

  return new Promise((resolve, reject)=>{
    fs.writeFile(filename, data, (err)=>{
      return reject(err);
    })
    resolve();
  })

}




async function cleanFile(filename){

  try{

    const content = await readFileAsync(filename, 'utf-8');

    const cleanedcontent = content.replace(/\s+/g, ' '). trim();

    await writefileAsync(filename, cleanedcontent);

    console.log(`File ${filename} has been cleaned.`);

  }catch(error){
    console.error("Error: ", error.message)
  }
}

cleanFile('a.txt')



// You can either use the fs.promises API or wrap fs.readFile and fs.wrtieFile in a promise.