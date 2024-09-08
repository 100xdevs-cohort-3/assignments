/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = 0
    for(i = 0; i < numbers.length; i++){
        if(max < numbers[i]) max = numbers[i];
    }

    return max;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));

module.exports = findLargestElement;