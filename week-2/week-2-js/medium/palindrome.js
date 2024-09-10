/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// ---------------- Using Two Pointer --------------- 

// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
//
//   let lo = 0, hi = str.length - 1;
//   while (lo <= hi) {
//     if (str.charAt(lo) != str.charAt(hi)) {
//       return false;
//     }
//     lo++;
//     hi--;
//   }
//   return true;
// }

function isPalindrome(str) {
  let changedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

  return changedStr === changedStr.split('').reverse().join('');
}

module.exports = isPalindrome;
