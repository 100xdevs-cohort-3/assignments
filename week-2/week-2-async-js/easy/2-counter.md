## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let i = 1
function op(){
    console.log(i++)
    setTimeout(op,1000)
}
op()






































































(Hint: setTimeout)