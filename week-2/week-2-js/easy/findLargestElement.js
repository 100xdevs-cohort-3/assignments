/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  //here we are initializing the max variable with the first element of the array
  let max = numbers[0];

  //Iterating through the array and comparing each element with the max variable
    for (let i = 0; i < numbers.length; i++) {

      //If the element is greater than the max variable (numbers[0]), then we are updating the max variable with the element
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

module.exports = findLargestElement;