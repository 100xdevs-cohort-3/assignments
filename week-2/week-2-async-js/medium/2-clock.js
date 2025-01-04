function updateTime() {
  const date = new Date();

  let meridiem;
  let hour = date.getHours();

  if (hour > 12) {
    meridiem = "PM";
    hour -= 12;
  } else {
    meridiem = "AM";
  }

  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);

  console.log(`${hour}:${minutes}:${seconds} ${meridiem}`);
}

setInterval(updateTime, 1000);
