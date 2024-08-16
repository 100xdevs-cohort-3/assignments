// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let counter = 0;
function print(){
  console.log(counter);
  counter++;
  setTimeout(print,2000)
}

print()
// setTimeout(print,2000)