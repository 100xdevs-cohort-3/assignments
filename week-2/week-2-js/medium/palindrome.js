/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const sanitizedStr = [];

  for (c of str) {
    if (!",!.? ".includes(c)) {
      sanitizedStr.push(c.toLowerCase());
    }
  }
  return sanitizedStr.join("") === sanitizedStr.reverse().join("");
}

module.exports = isPalindrome;
