/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(t) {
  return new Promise((res) => {
    setTimeout(res, t * 1000);
  });
}

function wait1(t) {
  return wait(t);
}

function wait2(t) {
  return wait(t);
}

function wait3(t) {
  return wait(t);
}

async function calculateTime(t1, t2, t3) {
  const start = new Date();
  //using async await
  await wait1(t1);
  await wait2(t2);
  await wait3(t3);
  const end = new Date();
  return end - start;
}

module.exports = calculateTime;
