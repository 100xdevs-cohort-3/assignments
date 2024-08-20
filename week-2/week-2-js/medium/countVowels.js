/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
    
  let actualStr = str.toLowerCase().split('').sort();

  for(let i=0; i < actualStr.length; i++){
    if(actualStr[i] === 'a' || actualStr[i] === 'e' || actualStr[i] === 'i' || actualStr[i] === 'o' || actualStr[i] === 'u'){
      count +=1;
    }
  }
  return count

}

// console.log(countVowels('sahil')); 
// should return 2

module.exports = countVowels;