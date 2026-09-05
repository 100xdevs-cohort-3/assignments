function formatClock(date = new Date(), twelveHour = false) {
  const hours = date.getHours();
  const pad = number => String(number).padStart(2, '0');
  return [pad(twelveHour ? hours % 12 || 12 : hours), pad(date.getMinutes()), pad(date.getSeconds())].join(':') +
    (twelveHour ? (hours >= 12 ? ' PM' : ' AM') : '');
}
function startClock(onTick = console.log) {
  const tick = () => { const now = new Date(); onTick(formatClock(now) + ' | ' + formatClock(now, true)); };
  tick();
  const timer = setInterval(tick, 1000);
  return () => clearInterval(timer);
}
if (require.main === module) startClock();
module.exports = { formatClock, startClock };
