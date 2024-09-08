/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const promiseAfterNSeconds = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait(n) {
    await promiseAfterNSeconds(n * 1000);
    console.log(n, " milliseconds have passed!");
}

wait(5);
