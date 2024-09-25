/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let result1=str1.toLowerCase().split('').sort().join('');
    let result2=str2.toLowerCase().split('').sort().join('');

    return result1.toLowerCase()===result2.toLowerCase();

  

//     let str1="my name is khan";
// str1=str1.split('').sort().join('');
// console.log(str1);

// let str2="ym emna si hakn";
// str2=str2.split('').sort().join('');
// console.log(str2);



}

module.exports = isAnagram;
