// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs =require('fs');

async function writing(){
   let append =fs.writeFile("text2.txt","i am writing from the another file",(error,content)=>{
      if(error){
        console.log(error);
      }
   }
   );
}

writing();