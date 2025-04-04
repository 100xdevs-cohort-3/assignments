/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let validString = "";
  for (var c of str) {
    if (c >= "a" && c <= "z") validString += c;
  }
  let length = validString.length;
  for (let i = 0, j = length - 1; i < j; i++, j--) {
    if (validString[i] != validString[j]) return false;
  }
  return true;
}

module.exports = isPalindrome;
