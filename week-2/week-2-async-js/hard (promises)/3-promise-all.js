/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((res) =>{
    setTimeout(() =>{
      res(`wait1 done`)
    }, t * 1000)
  })}
                     


function wait2(t) {
return new Promise((res) =>{
  setTimeout(() =>{
    res(`wait2 done`)
  }, t * 1000)
})}

function wait3(t) {
return new Promise((res) =>{
  setTimeout(() =>{
    res(`wait3 done`)
  }, t * 1000)
})}

function calculateTime(t1, t2, t3) {
  const rn = Date.now()
  return Promise.all(
      [
        wait1(t1),
        wait2(t2),
        wait3(t3)
      ]).then(() => {return Date.now() - rn})
}

// calculateTime(1,2,3).then(totalTime => {
//   console.log(totalTime)
//   console.log(typeof totalTime)
// })


module.exports = calculateTime;