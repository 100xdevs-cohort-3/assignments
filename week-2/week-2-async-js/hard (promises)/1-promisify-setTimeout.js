/*
w
*/

function wait(n) {
    return new Promise(resolve =>{
        setTimeout(resolve,n*1000);
    });
}

module.exports = wait;
