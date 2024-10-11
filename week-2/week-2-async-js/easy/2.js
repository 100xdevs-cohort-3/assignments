let counter=1;
function callback(){
    console.clear();
    console.log(counter);
    counter+=1;
    setTimeout(callback,1000);

}

setTimeout(callback,1000);