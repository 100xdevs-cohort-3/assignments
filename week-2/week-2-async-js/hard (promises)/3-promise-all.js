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
  await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  return Date.now() - start;
}
module.exports = calculateTime;
