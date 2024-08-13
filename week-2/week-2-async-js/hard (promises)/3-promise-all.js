/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,t);
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,t);
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,t);
    })
}

function calculateTime(t1, t2, t3) {
    const s=Data.now();
    return new Promise.all([wait1,wait2,wait3]).then(()=>{
        const e=Data.now();
        console.log(s-e); 
        return (s-e);//time in milliseconds
    })
}

module.exports = calculateTime;
