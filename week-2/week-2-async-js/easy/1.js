//we have to print a counter starts from 1 and keep going
//for this we have to go for setinterval not settimeout

let ctr=1;
function callback(){
    console.clear();//current no will be printed not all
    
    console.log(ctr);
    ctr+=1;
}

setInterval(callback,1000);
//setTimeout(callback,1000) //call after one second

//settime to use something once 
//setInterval ->to use in the interval