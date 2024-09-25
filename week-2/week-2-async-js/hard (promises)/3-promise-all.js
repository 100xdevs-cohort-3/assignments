/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve();
        },t1*1000)
    })

}

function wait2(t2) {

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve();
        },t2*1000)
    })

}

function wait3(t3) {

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve();
        },t3*1000)
    })

}

async function calculateTime(t1, t2, t3) {

    // let p1=wait1(t1);
    // let p2=wait2(t2);
    // let p3=wait3(t3);
     let starttime=Date.now();
    let promiseall= await Promise.all([wait1(t1),wait2(t2),wait3(t3)]);
    let endtime=Date.now();
    let totaltime=endtime-starttime;

    return totaltime;

}



module.exports = calculateTime;
