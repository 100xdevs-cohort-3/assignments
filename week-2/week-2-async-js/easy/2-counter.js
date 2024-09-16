// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let counter = 0;
function print(ms){
  console.log(counter);
  counter++;
  setTimeout(() => {
    print(ms);
  }, ms);
}

// print()

function setTimeoutcounter(ms) {
  print(ms)
}


// setTimeoutcounter(1000)
module.exports = setTimeoutcounter;