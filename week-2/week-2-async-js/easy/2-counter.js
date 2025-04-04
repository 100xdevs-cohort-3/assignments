let count = 0;
function main() {
  setTimeout(() => {
    console.log(`The counter ${count++}`);
    main();
  }, 1000);
}

main();
