/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  console.log(str);
  let orginalString=str.toLowerCase().split('').join('').replace(/ /g,"").replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");
  let reverseString=str.toLowerCase().split('').reverse().join('').replace(/ /g,"").replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");
  
  return orginalString===reverseString;
}

module.exports = isPalindrome;
