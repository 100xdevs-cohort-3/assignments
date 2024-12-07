let counter = 0;

function updateCounter(){
    counter++;
    console.log(counter);
    setTimeout(updateCounter,1000);
}

updateCounter();


// setTimeout

// - setTimeout executes a function once after a specified delay (in milliseconds).
// - It returns a timeout ID, which can be used to cancel the timeout using clearTimeout.
// - The function is executed only once, and then it's done.

// setInterval

// - setInterval executes a function repeatedly at a specified interval (in milliseconds).
// - It returns an interval ID, which can be used to cancel the interval using clearInterval.
// - The function is executed repeatedly at the specified interval until it's cancelled.
