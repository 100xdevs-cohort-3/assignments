/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(nums) {
    if(nums.length == 0){
        return undefined;
    }
    return Math.max(...nums)
}

module.exports = findLargestElement;