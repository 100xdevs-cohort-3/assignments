/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let noOfVowels = 0;
const vowels = ['a','e','i','o','u']
for(let i = 0; i < str.length; i++){
  for(const vowel of vowels){
    if(str[i] == vowel || str[i] == vowel.toUpperCase())
      noOfVowels++;
  }
}
return noOfVowels;
}

module.exports = countVowels;