const wait = require('./1-promisify-setTimeout');
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
  const start = Date.now();
  await wait1(t1);
  await wait2(t2);
  await wait3(t3);
  return Date.now() - start;
}
module.exports = calculateTime;
