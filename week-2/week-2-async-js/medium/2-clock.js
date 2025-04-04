function callback() {
  const time = new Date();
  const hours24 = time.getHours().toString().padStart(2, "0");

  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const medium = hours24 >= 12 ? "PM" : "AM";

  const log24 = `${hours24}:${minutes}:${seconds} ${medium}`;

  console.log(log24);
}

setInterval(callback, 1000);
