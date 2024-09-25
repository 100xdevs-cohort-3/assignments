/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

async function calculateTime(t1, t2, t3) {
    const start = new Date();
    await wait1(t1);
    console.log(t1, " seconds have passed");
    await wait2(t2);
    console.log(t2, " seconds have passed");
    await wait3(t3);
    console.log(t3, " seconds have passed");

    const end = new Date();

    console.log(end - start, " milliseconds are taken to complete the process");
}

const t1 = 1;
const t2 = 2;
const t3 = 3;

calculateTime(t1, t2, t3);
module.exports = calculateTime;
