function call() {
  console.log("Hello World");
  setTimeout(() => {
    call();
  }, 1000);
}
call();
