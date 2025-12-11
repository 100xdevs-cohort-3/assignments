function wait1(time) {
    return new Promise(resolve => setTimeout(resolve, time*1000));
}

// Placeholder wait function
function wait2(time) {
    return new Promise(resolve => setTimeout(resolve, time*1000));
}

// Placeholder wait function
function wait3(time) {
    return new Promise(resolve => setTimeout(resolve, time*1000));
}

function calculateTime(t1, t2, t3) {
    let start = new Date();

    return call(t1, t2, t3)
        .then(function () {
            let end = new Date();
            return end.getTime() - start.getTime();
        });
}

function call(t1, t2, t3) {
    return wait1(t1)
        .then(function () {
            return wait2(t2);
        })
        .then(function () {
            return wait3(t3);
        });
}

module.exports = calculateTime;

// function randomAfter1S(resolve, n) {
//   setTimeout(resolve, n*1000);
// }

function callbackAfter1S() {
  console.log("promise succeeded after 1 seconds!")
}
let p1 = new Promise((resolve) => randomAfterNS(resolve, 1));
// p1.then(callbackAfter1S);



// function randomAfter2S(resolve, n) {
//   setTimeout(resolve, n*1000);
// }

function callbackAfter2S() {
  console.log("promise succeeded after 2 seconds!")
}
// let p2 = new Promise((resolve) => randomAfterNS(resolve, 2));
// p2.then(callbackAfter2S);



// function randomAfter3S(resolve, n) {
//   setTimeout(resolve, n*1000);
// }

function callbackAfter3S() {
  console.log("promise succeeded after 3 seconds!")
}
// let p3 = new Promise((resolve) => randomAfterNS(resolve, 3));
// p3.then(callbackAfter3S);

console.log("hello")

function randomAfterNS(resolve, n) {
  setTimeout(resolve, n*1000);
}

const startTime = Date.now();

function callback() {
  console.log("all promises succeeded after " + (Date.now() - startTime)/1000 + " seconds!")
}

p1
  .then(() => {
    callbackAfter1S();
    return new Promise((resolve) => randomAfterNS(resolve, 2));
  })
  .then(() => {
    callbackAfter2S();
    return new Promise((resolve) => randomAfterNS(resolve, 3));
  })
  .then(() => {
    callbackAfter3S();
    callback();
  });
    

p1 = new Promise((resolve) => randomAfterNS(resolve, 1));
p1.then(() => {
    callbackAfter1S();
    p2 = new Promise((resolve) => randomAfterNS(resolve, 2));
    p2.then(() => {
      callbackAfter2S();
      p3 = new Promise((resolve) => randomAfterNS(resolve, 3));
      p3.then(() => {
        callbackAfter3S();
        callback();
     })
    })
  })

  async function solve() {
    await new Promise((resolve) => randomAfterNS(resolve, 1));
    callbackAfter1S();
    await new Promise((resolve) => randomAfterNS(resolve, 2));
    callbackAfter2S();
    await new Promise((resolve) => randomAfterNS(resolve, 3));
    callbackAfter3S();
    callback();
  }

  solve()

  console.log("whatsup")