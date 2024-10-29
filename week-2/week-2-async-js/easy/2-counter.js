let counter = 0;

function increaseCounter(){
  console.clear();
  console.log(counter)
  counter++;
  setTimeout(increaseCounter, 1000)
}

setTimeout(increaseCounter, 1000)