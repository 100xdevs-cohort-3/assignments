/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

     str=str.toLowerCase().split('');
    let totalvowel=0;

    str.forEach(element => {
         if(element=='a'|| element=='e'||element=='i'||element=='o'||element=='u'){
               totalvowel++;
         }
    });

    return totalvowel;
}

module.exports = countVowels;