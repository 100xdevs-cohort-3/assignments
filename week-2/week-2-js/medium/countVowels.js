/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isItemVowel(item)
{
  if(item == 'a' || item == 'e'|| item == 'i'|| item == 'o' || item == 'u' || item == 'A' || item == 'E'|| item == 'I'|| item == 'O' || item == 'U' )
    return true;
  return false;
}

function countVowels(str) {
    let nummberOfVowels = 0;
    let array = str.split("");
    array.forEach(item => {
      if(isItemVowel(item))
        nummberOfVowels = nummberOfVowels + 1;
    });
    return nummberOfVowels;
}

// BETTER WAy
/*
function isItemVowel(item) {
  return 'aeiouAEIOU'.includes(item);
}

function countVowels(str) {
    let numberOfVowels = 0; // Use 'let' instead of 'const' and fix the typo
    const array = str.split("");
    array.forEach(item => {
      if (isItemVowel(item)) {
        numberOfVowels += 1; // Increment the vowel count
      }
    });
    return numberOfVowels;
}
*/

module.exports = countVowels;