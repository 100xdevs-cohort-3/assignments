/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const size = numbers.length;
    if(size <= 0) return;

    var maxValue = Number.MIN_SAFE_INTEGER;

    for(i = 0; i < size; i++){
        if(numbers[i] > maxValue){
            maxValue = numbers[i];
        }
    }

    return maxValue;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));

module.exports = findLargestElement;