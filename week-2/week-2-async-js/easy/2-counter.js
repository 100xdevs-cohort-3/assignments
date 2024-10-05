// Counter without setInterval

let counter = 0;

const Timer = function (){
    counter++
    console.log(counter);
    setTimeout(Timer,1000);
}
Timer()

