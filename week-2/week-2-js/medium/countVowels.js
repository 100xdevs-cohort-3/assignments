/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function vowel(c) {
  return "aeiouAEIOU".includes(c);
}
function countVowels(str) {
  // Your code here
  let cnt = 0;
  for (var c of str) {
    if (vowel(c)) cnt++;
  }
  return cnt;
}

module.exports = countVowels;
