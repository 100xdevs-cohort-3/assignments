/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const string = str.toLowerCase().replace(/[\s\p{P}]/gu, '');
  const stringArray = string.split('');
  let newArray = [];
  let c=0;
  for (let i=stringArray.length-1; i>=0; i--) {
    newArray[c] = stringArray[i];
    c++;
  }

  const newstring = newArray.join('');
  if (string === newstring) {
    return true;
  }

  else {
    return false;
  }
}

module.exports = isPalindrome;
