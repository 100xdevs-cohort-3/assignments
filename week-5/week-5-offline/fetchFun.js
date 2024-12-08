//asios and fetch

function main(){
    fetch("https://sum-server.100xdev.com/todos")  //first call
      .then(async (response)=>{
        //other async call to convet it into json
        const json=await response.json(); //it will return the promise the by using async function 
        console.log(json.todos.length);

      });
}

// async function main(){
//     const response =await fetch("https://sum-server.100xdev.com/todos");
//     const json=await response.json();
//     console.log(json.todos.length);
// }


//both are doing the same thing
main();