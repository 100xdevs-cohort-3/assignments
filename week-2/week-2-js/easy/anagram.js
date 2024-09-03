/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const map = new Map();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const m = str1.length;
  const n = str2.length;
  if (m != n) {
    return false;
  }
  for (let i = 0; i < m; i++) {
    if (!map.has(str1[i])) {
      map.set(str1[i], 0);
    }
    if (!map.has(str2[i])) {
      map.set(str2[i], 0);
    }

    map.set(str1[i], map.get(str1[i]) + 1);
    map.set(str2[i], map.get(str2[i]) - 1);
  }

  console.log(arguments);
  console.log(map);
  for (let value of map.values()) {
    if (value != 0) {
      return false;
    }
  }

  return true;
}
module.exports = isAnagram;
