// ---------- Counter -----------
//
// let count = 0;
//
// function counter(resolve) {
//   setInterval(resolve, 1000);
// }
//
// counter(function () {
//   console.log(count++);
// });


let count = 1;

function counter(ms) {
  let timeout = setInterval(() => {
    console.log(count++);
    if (count > 15) {
      clearInterval(timeout);
    }
  }, ms);
}

counter(1000);
