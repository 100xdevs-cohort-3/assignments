/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  }

  return normalize(str1) == normalize(str2);
}

module.exports = isAnagram;
