/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; --i) {
    reversedStr += str[i];
  }
  if (str.toLowerCase() !== reversedStr.toLowerCase()) return false;
  return true;
}

module.exports = isPalindrome;
