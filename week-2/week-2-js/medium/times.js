/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;

    const start = new Date();
    
    for(i = n; i > 0; i--){
        sum += i;
    }

    const end = new Date();

    return end.getMinutes() == start.getMinutes() ? end.getSeconds() - start.getSeconds() : (59 - start.getSeconds()) + end.getSeconds();
}

console.log('Time for sum from 1 to 100:', calculateTime(100));
console.log('Time for sum from 1 to 100000:', calculateTime(100000));
console.log('Time for sum from 1 to 1000000000:', calculateTime(1000000000));