## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let count = 0;

// update and display the counter
function handleCounter() {
count++;
console.log(count);
}

const setIntervalId = setInterval(handleCounter, 1000);

console.log(setIntervalId);

// Stop the counter after a certain time
setTimeout(() => {
clearInterval(setIntervalId);
console.log("counter stopped");
}, 10000);
