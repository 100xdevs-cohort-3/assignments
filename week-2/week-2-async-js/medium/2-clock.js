// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function startCounter() {
  setInterval(() => {
    const now = new Date();
    // Extract hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format as HH:MM:SS
    const formattedTime = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;

    console.log(formattedTime);
  }, 1000);
}
startCounter();
