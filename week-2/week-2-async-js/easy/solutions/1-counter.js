let count = 0;

function counter() {
  count += 1;
  console.clear(); // to give a timer feel in console :)
  console.log(count);
}

setInterval(counter, 1000);
