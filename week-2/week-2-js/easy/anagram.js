/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  //count characters in str1
  for (const char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }

  //count characters in str2
  for (const char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  // compare character counts
  for (const char in obj1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
