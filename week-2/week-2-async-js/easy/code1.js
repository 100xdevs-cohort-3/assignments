//7
function timeout(){
    console.log("Click the button!");
}

console.log("Hii!");

setTimeout(timeout,1000); // i/o operation

console.log("Welcone to loop");

let c=0;
for(let i=0;i<1000000000;i++){ //cpu opearion thread is busy here for 3-4 sec 
    c = c + 1;
}

console.log("Expensive operation done");

/*

option 1
Hi
welcone to loop
click the button
Expensive opeartion done


option 2
Hi
welcome to loop
Expensive opeartion done
click the button

//i think the option 2 is correct but i is correct  bcoz in loop the thread is busy so it doesnot go to  i/o operation when it will free then it will go 
*/