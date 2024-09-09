/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  str = str.toLowerCase();

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

if(isPalindrome('Nitin')){
  console.log("Given String is a palindrome");
}
else{
  console.log("Given String is not a palindrome");  
}

module.exports = isPalindrome;
