/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const newStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  return newStr === newStr.split("").reverse().join("");
}

module.exports = isPalindrome;
