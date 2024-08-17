

let count = 1;

function counter() {
  setTimeout(function () {
    console.log(count++);
    counter();
  }, 1000);
}

counter();
