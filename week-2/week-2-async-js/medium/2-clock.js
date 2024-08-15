function startCounter() {
  setInterval(() => {
    // Increment the counter by 1
    console.log(new Date()); // Log the current value of the counter
  }, 1000); // Set the interval to 1000 milliseconds (1 second)
}

startCounter(); // Start the counter
