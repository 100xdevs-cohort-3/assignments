/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  const ans = numbers.reduce(function (acc, cur) {
    acc = Math.max(acc, cur);
    return acc;
  }, numbers[0]);
  return ans;
}

module.exports = findLargestElement;
