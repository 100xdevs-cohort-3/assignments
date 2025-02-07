let count = 0;

function addCount(){
    count = count + 1;
    console.log(count);
    setTimeout( addCount , 1000);
}

addCount();