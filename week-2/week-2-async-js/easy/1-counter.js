// let counter = 1;
// const callback = () => {
//   console.log(counter);
//   counter++;
//   setTimeout(callback, 1000);
// };
// setTimeout(callback, 1000);
let counter = 0;
setInterval(() => {
  console.log(++counter);
}, 1000);
