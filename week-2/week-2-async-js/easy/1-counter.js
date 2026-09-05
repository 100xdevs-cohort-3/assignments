function startCounter(onTick = console.log) {
  let count = 0;
  const timer = setInterval(() => onTick(++count), 1000);
  return () => clearInterval(timer);
}
if (require.main === module) startCounter();
module.exports = startCounter;
