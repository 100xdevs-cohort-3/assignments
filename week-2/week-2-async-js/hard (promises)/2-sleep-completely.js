/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function Stuck(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function sleep(milliseconds) {
    console.log("Machine won't for ", milliseconds, " milliseconds");
    await Stuck(milliseconds);
    console.log("few seconds have passed");
}

sleep(5000);

module.exports = sleep;
