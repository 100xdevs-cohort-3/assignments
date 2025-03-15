function time() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const isAm = hours > 11 ? "PM" : "AM";
  console.log(hours + ":" + minutes + "::" + seconds + " " + isAm);
}

setInterval(() => {
  time();
}, 1000);
