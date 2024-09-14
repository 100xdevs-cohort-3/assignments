function calculateTime(n) {
    const startTime = performance.now(); 
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const endTime = performance.now();

    return (endTime - startTime) / 1000;
}

console.log('Time for sum from 1 to 100:', calculateTime(100));
console.log('Time for sum from 1 to 100000:', calculateTime(100000));
console.log('Time for sum from 1 to 1000000000:', calculateTime(1000000000));
