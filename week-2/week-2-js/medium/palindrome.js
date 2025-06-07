/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerStr = '';
  for (let ch of str) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
      lowerStr += ch.toLowerCase();
    } else if (ch >= '0' && ch <= '9') {
      lowerStr += ch;
    }
  }
  let left = 0;
  let right = lowerStr.length - 1;
  while (left < right) {
    if (lowerStr[left] !== lowerStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
