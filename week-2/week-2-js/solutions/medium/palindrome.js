/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    let filteredStr = '';
    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            filteredStr += char.toLowerCase();
        }
    }

    // Check if the filtered string is a palindrome
    let left = 0;
    let right = filteredStr.length - 1;

    while (left < right) {
        if (filteredStr[left] !== filteredStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

module.exports = isPalindrome;

  
  