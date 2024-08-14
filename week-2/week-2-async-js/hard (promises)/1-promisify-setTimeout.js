/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000); // returns after n seconds
  });
}

wait(2).then(() => {
  console.log("2 seconds has been completed");
});

module.exports = wait;
