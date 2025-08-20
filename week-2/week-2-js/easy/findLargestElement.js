/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let result = numbers[0];
    for(const number of numbers){
        if (number > result){
            result = number;
        }
    }
    return result
}
const numbers = [1, 2, 3, 4, 5, 6, 1, 3, 99, 1, 3, 4234, 5, 2];
console.log(findLargestElement(numbers));


module.exports = findLargestElement;