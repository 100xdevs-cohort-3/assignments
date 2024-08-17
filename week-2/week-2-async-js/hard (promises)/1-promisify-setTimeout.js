/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

module.exports = wait;

// Example usage:
wait(10000).then(() => {
  console.log("consumed");
});
;
