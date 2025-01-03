/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsCount = 0;

  for (character of str) {
    if ("aeiou".includes(character.toLowerCase())) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

module.exports = countVowels;
