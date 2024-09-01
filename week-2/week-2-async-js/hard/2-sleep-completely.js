/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {

    return new Promise((resolve) => {
        const start = Date.now();
        let now = start;
    
        // Busy-wait loop: blocks the thread until the specified time has passed
        while (now - start < ms) {
          now = Date.now();
        }
    
        resolve(); // Resolve the promise once the time has passed
      });
}

module.exports = sleep;
