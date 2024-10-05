//Create a counter in JavaScript
let counter = 0;
const Timer = function (){
    
    counter++
    console.log(counter);
     
}

setInterval(Timer,1000);