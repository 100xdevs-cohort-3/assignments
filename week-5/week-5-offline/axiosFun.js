// axios are external library we have to import it
const axios=require("axios");



async function main(){
    const response =await fetch("https://sum-server.100xdev.com/todos");
    const json=await response.json();
    console.log(json.todos.length);
}


async function main(){
    const response =await axios.get("https://sum-server.100xdev.com/todos");
    //respomnse .data
    console.log(response.data.todos.length);
}


main();

