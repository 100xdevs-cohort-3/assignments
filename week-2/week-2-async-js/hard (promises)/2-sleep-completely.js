// Deliberately blocks the thread, as required by this exercise.
function sleep(milliseconds) {
  return new Promise((resolve, reject) => {
    if (!Number.isFinite(milliseconds) || milliseconds < 0)
      return reject(new RangeError('Invalid duration'));
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
      /* busy wait */
    }
    resolve();
  });
}
module.exports = sleep;
