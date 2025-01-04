/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
     let maxi = -1;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>maxi){
            maxi = numbers[i];
        }
    }

    return maxi;
}

const numbers = [2,3,4,6,8,2,4,51,9];


console.log(findLargestElement(numbers));

module.exports = findLargestElement;
