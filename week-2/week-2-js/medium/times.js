// Measure an actual loop, rather than the constant-time arithmetic formula.
function calculateTime(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new RangeError('n must be a nonnegative integer');
  const start = performance.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  const seconds = (performance.now() - start) / 1000;
  if (require.main === module) console.log({ n, sum, seconds });
  return seconds;
}
if (require.main === module) {
  for (const n of process.argv.slice(2).length
    ? process.argv.slice(2).map(Number)
    : [100, 100000, 1000000000])
    calculateTime(n);
}
module.exports = calculateTime;
