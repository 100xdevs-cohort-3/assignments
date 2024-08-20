/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


//Using replace method to remove all the special characters from the string
function isPalindrome(str) {
  let loweredStr = str.toLowerCase();
  let filteredStr = loweredStr.replace(/[^a-z0-9]/g, "");

  let reversefilteredStr = filteredStr.split("").reverse().join("");

  console.log(filteredStr);
  console.log(reversefilteredStr);

  return filteredStr === reversefilteredStr;
}


module.exports = isPalindrome;


// function isPalindrome(str) {
//   const lowercaseStr = str.toLowerCase();

//   const filteredStr = lowercaseStr.split('').filter((char) => (char !== '?' && char !== ' ' && char !== '!' && char !== '.' && char !== ',')).join('');
//   const reversedStr = filteredStr.split('').reverse().join('');
//   return filteredStr === reversedStr;
// }
