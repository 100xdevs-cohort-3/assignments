function wait(n) {
    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, n * 1000);
    });
    return p;
}

module.exports = wait;

function randomAfter3S(resolve, n) {
  setTimeout(resolve, n*1000);
}

function callbackAfter3S() {
  console.log("promise succeeded after 3 seconds!")
}
p = new Promise((resolve) => randomAfter3S(resolve, 3));
p.then(callbackAfter3S);