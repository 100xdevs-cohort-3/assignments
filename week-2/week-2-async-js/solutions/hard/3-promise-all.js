function wait1(t) {
    return new Promise((resolve) => {
      setTimeout(resolve, t * 1000); // Convert seconds to milliseconds
    });
  }
  
  function wait2(t) {
    return new Promise((resolve) => {
      setTimeout(resolve, t * 1000);
    });
  }
  
  function wait3(t) {
    return new Promise((resolve) => {
      setTimeout(resolve, t * 1000);
    });
  }
  
  async function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
  
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  
    const totalTime = Date.now() - startTime;
    return totalTime;
  }
  
module.exports = calculateTime;


// function randomAfter1S(resolve, n) {
//   setTimeout(resolve, n*1000);
// }

function callbackAfter1S() {
  console.log("promise succeeded after 1 seconds!")
}
let p1 = new Promise((resolve) => randomAfterNS(resolve, 1));
p1.then(callbackAfter1S);



// function randomAfter2S(resolve, n) {
//   setTimeout(resolve, n*1000);
// }

function callbackAfter2S() {
  console.log("promise succeeded after 2 seconds!")
}
let p2 = new Promise((resolve) => randomAfterNS(resolve, 2));
p2.then(callbackAfter2S);



// function randomAfter3S(resolve, n) {
//   setTimeout(resolve, n*1000);
// }

function callbackAfter3S() {
  console.log("promise succeeded after 3 seconds!")
}
let p3 = new Promise((resolve) => randomAfterNS(resolve, 3));
p3.then(callbackAfter3S);

console.log("hello")

function randomAfterNS(resolve, n) {
  setTimeout(resolve, n*1000);
}

const startTime = Date.now();

function callback() {
  console.log("all promises succeeded after " + (Date.now() - startTime)/1000 + " seconds!")
}

Promise.all([p1, p2, p3]).then(callback);