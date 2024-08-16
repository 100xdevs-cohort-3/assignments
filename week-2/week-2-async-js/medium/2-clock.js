// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)



function startClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let time24 = hours + ":" + minutes + ":" + seconds;
  let ampm = hours >= 12 ? "PM" : "AM";
  let hours12 = hours % 12;
  if (hours12 === 0) hours12 = 12;
  let time12 = hours12 + ":" + minutes + ":" + seconds + " " + ampm;
  
  // Display both formats
  console.clear();
  console.log("24-hour format:", time24);
  console.log("12-hour format:", time12);
  console.log("Press Ctrl+C to stop the clock.");

}

setInterval(startClock, 1000)
