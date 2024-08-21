/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const string = str.toLowerCase();
    const strArray = string.split('');
    const vowels = strArray.filter((arr) => {
      if(arr === 'a' || arr === 'e' || arr === 'i' || arr === 'o' || arr === 'u')
        return arr;
    });
    return vowels.length;
}

module.exports = countVowels;