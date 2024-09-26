/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let val = Number.MIN_SAFE_INTEGER;
  for (num of numbers) {
    if (val < num) val = num;
  }
  return val;
}

module.exports = findLargestElement;
