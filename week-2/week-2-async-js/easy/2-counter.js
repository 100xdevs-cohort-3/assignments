function startCounter(onTick = console.log) {
  let count = 0;
  let stopped = false;
  let timer;
  function tick() {
    if (stopped) return;
    onTick(++count);
    if (!stopped) timer = setTimeout(tick, 1000);
  }
  timer = setTimeout(tick, 1000);
  return () => {
    stopped = true;
    clearTimeout(timer);
  };
}
if (require.main === module) startCounter();
module.exports = startCounter;
