/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  if (typeof str !== 'string') return 0; 
  
  const matches = str.match(/[aeiou]/gi);
  
  return matches ? matches.length : 0;

}

module.exports = countVowels;