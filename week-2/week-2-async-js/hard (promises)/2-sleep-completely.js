/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const p = new Promise((resolve) => {
    const start = Date.now();
    while (true) {
      if (Date.now() - start >= milliseconds) {
        // console.log(Date.now() - start);
        break;
      }
    }
    resolve();
  });
  return p;
}
// sleep(3000).then(() => {
//   console.log("after 3 seconds");
// });
// console.log("Hello");

module.exports = sleep;
