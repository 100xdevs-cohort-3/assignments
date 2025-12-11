function sleep(milliseconds) {
    return new Promise((resolve) => {
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliseconds);
        resolve();
    });
}

module.exports = sleep;

function randomAfterSleep(resolve, n) {
  let startTime = new Date().getTime();
  while (new Date().getTime() < startTime + n*1000);
  resolve();
}

function callbackAfterSleep() {
  console.log("promise succeeded after sleeping for 3 seconds!")
}
p = new Promise((resolve) => randomAfterSleep(resolve, 3));
p.then(callbackAfterSleep);