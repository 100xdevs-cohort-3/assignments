/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // Resolves after the specified seconds
    }, seconds * 1000); // Converts seconds to milliseconds
  });
}

module.exports = wait;
