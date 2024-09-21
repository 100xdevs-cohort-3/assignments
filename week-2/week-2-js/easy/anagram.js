/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) 
{
let strng1 = str1.toLowerCase().split("").sort().join();
let strng2 = str2.toLowerCase().split("").sort().join();
  if(strng1 == strng2) {
    return true;
  }else
  {
    return false;
  }
}
module.exports = isAnagram;
