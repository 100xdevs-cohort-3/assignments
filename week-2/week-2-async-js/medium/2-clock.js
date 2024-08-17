

const date = new Date();


function counter(hour, minute, second) {
  setInterval(() => {

    if (second >= 59) {
      minute += 1;
      second = 0;
    } else {
      second += 1;
    }

    if (minute >= 59) {
      hour += 1;
      minute = 0;
    }

    let meridiem = "AM";
    if (hour >= 12) {
      meridiem = "PM";
    } else if (hour === 0) {
      meridiem = "AM";
    }

    const hourStr = hour.toString().padStart(2, "0");
    const minuteStr = minute.toString().padStart(2, "0");
    const secondStr = second.toString().padStart(2, "0");
    console.log(`${hourStr} : ${minuteStr} : ${secondStr} ${meridiem}`);
  }, 1000)
}

function main() {
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  counter(hour, minute, second);
}


main();


