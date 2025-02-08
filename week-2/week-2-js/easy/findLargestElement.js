/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = numbers[0];
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}
let numbers = [1,2,3,4,5];
let largest = findLargestElement(numbers);
console.log(largest);


module.exports = findLargestElement;