(() => {
  setInterval(() => {
    const date = new Date();
    const hour =
      date.getHours() % 12 === 0 ? "12" : checkDigits(date.getHours() % 12);
    const minute = checkDigits(date.getMinutes());
    const second = checkDigits(date.getSeconds());
    const period = date.getHours() >= 12 ? "PM" : "AM";
    console.clear();
    console.log(`${checkDigits(date.getHours())} : ${minute} : ${second}`);
    console.log(`${hour} : ${minute} : ${second} ${period}`);
  }, 1000);
})();

function checkDigits(digit) {
  return String(digit).length === 1 ? `0${digit}` : `${digit}`;
}
