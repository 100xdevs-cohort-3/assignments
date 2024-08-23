let count = 0;

function counter() {
  count += 1;
  console.clear();
  console.log(count);
  setTimeout(counter, 1000);
}

counter();
