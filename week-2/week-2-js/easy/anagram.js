/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const normalize = (str) =>
    str.replace(/[^a-z]/gi, '').toLowerCase();
  const sortString = (str) =>
    normalize(str).split('').sort().join('');
  return sortString(str1) === sortString(str2);
}

module.exports = isAnagram;
