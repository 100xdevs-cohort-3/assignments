/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Clean the string: remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Initialize two pointers
  let left = 0;
  let right = cleanedStr.length - 1;
  
  // Loop until the two pointers meet in the middle
  while (left < right) {
      // Compare characters at the left and right pointers
      if (cleanedStr[left] !== cleanedStr[right]) {
          return false; // If characters don't match, it's not a palindrome
      }
      // Move pointers towards the center
      left++;
      right--;
  }
  
  // If all characters matched, it's a palindrome
  return true;
}


module.exports = isPalindrome;
