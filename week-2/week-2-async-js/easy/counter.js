let count = 1;
/* 
setInterval(() => {
  console.log(count);
  count++;
}, 1000);
 */

function counter() {
  console.log(count);
  count++;
  setTimeout(counter, 1000);
}

counter();
