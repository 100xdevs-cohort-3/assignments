/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  count = 0;
  for (let letter of str) {
    if (["a", "e", "i", "o", "u"].includes(letter)) {
      count++;
    }
  }
  return count
}

// countVowels("suleman");
module.exports = countVowels;
