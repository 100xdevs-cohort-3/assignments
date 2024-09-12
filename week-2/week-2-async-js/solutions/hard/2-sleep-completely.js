function sleep(milliseconds) {
  return new Promise((resolve) => {
    let startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliseconds);
    const totalTime = Date.now() - startTime;
    console.log("sleep completed in " + totalTime);
    resolve();
  });
}

module.exports = sleep;
