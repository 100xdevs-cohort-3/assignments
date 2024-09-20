/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) 
{
//let arr1 = [];
//arr1 = [...str1]; // or use slpit function
let strg1 = str1.toLowerCase();
let strg2 = str2.toLowerCase();
let a = strg1.split("");
let b = strg2.split("");
//let arr2 = [];
//arr2 = [...str2];
  let c = a.sort(); // abccba -> aabbcc
  let d = b.sort(); // sort() funcvtion can only e use with array
// here we will use join function join()
let sortedstr1 = c.join();
let sortedstr2 = d.join();


  if(sortedstr1 == sortedstr2) {
    return true;
  }else
  {
    return false;
  }
}

module.exports = isAnagram;
