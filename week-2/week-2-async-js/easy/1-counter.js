//create a counter in js

function counter(){
    let c=0;
    const sI=setInterval(function(){
        console.log(++c);
        if(c===10) clearInterval(sI);
    },1000);
}

counter();