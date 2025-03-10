## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 0;

function update()
{
  const element = document.querySelectorAll("h1")[0];
  element.innerHTML = counter;
  counter = counter + 1;

  setTimeout(update, 1000);
}

update();






































































(Hint: setTimeout)
