/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase(); //Match any character that is not an English alphabet letter, and do this globally (for all such characters in the string)
  let rev_str2 = str.split("").reverse().join("");
  if (str === rev_str2){
    return true
  }
  else{
    return false;
  }
}


module.exports = isPalindrome;
