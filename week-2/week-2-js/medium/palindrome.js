/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  //remove punctuations
  const punctuation = /[!"#$%&'()*+,-./:;=?@[\]^_`{|}~]/g;
  const cleanedText = str.replace(punctuation, '');
  str = cleanedText.toLowerCase();
  str = str.replace(/\s/g, '');

  let low = 0;
  let high = str.length-1;

  while(low < high){
    if(str[low] != str[high]){
      return false;
    }
    low++;
    high--;
  }

  return true;
}

module.exports = isPalindrome;
