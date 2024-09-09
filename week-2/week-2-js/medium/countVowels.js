/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(letter){
  vowels = ['a', 'e', 'i', 'o', 'u']

  for(i = 0; i < vowels.length; i++){
    if(letter === vowels[i]) return true;
  }

  return false;
}

function countVowels(str) {
    // Your code here
    const strArr = str.split('');
    
    const result = strArr.filter((letter) => isVowel(letter));
    return result.length;
}

console.log(countVowels('dhanush'));

module.exports = countVowels;