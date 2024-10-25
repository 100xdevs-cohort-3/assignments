// ## Counter without setInterval

// Without using 
// setInterval,
//  try to code a counter in Javascript. There is a hint at the bottom 
//  of the file if you get stuck.


// function Counter(){
//     let count=0;
//    const result= count++
//    console.log(result)
    
// }

// Counter()
// Counter()


let count=0;
function Counting(){
    const result=count++;
    console.log(result)
    setTimeout(Counting, 1000);
}

Counting()




































































// (Hint: setTimeout)