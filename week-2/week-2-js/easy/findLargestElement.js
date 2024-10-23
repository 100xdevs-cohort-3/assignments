/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers=[]) {
    let res = numbers.sort((a,b)=> b-a)
    console.log(res)
    return res[-0]
}

findLargestElement([2,3])

module.exports = findLargestElement;