function displayTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const timeIn24Hour = `${hours}:${minutes}:${seconds}`;
  const timeIn12Hour = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("time24hour").innerHTML = timeIn24Hour;
  document.getElementById("time12hour").innerHTML = timeIn12Hour;
  console.log(timeIn24Hour);
  console.log(timeIn12Hour);
}

setInterval(displayTime, 1000);
