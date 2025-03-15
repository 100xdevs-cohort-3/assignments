/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let str1 = "";
  let str2 = "";

  for (var char of str) {
    if (char >= "a" && char <= "z") {
      str1 += char;
      str2 = char + str2;
    }
  }
  return str1 == str2;
}

module.exports = isPalindrome;
