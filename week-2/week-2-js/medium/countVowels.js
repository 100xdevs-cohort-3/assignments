/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let newStr = str.toLowerCase().replace(/\s/g, "").split('');
    let counter = 0;
    newStr.forEach(element => {
      if(element==='a' || element==='e' || element==='i' || element==='o' || element==='u') counter++;
    });
    return counter;
}

module.exports = countVowels;