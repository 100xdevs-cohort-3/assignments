function wait(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0)
    return Promise.reject(new RangeError('Seconds must be nonnegative'));
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
module.exports = wait;
