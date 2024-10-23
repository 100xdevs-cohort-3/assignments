/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str='') {
  const strArr = str.toLowerCase().split('')
  let i = 0
  let j = strArr.length - 1
  while(i <= (j/2)){
    if(strArr[i]==strArr[j]){
      i++
      j--
    }else{
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
