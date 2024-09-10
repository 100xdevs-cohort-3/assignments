/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// ------------- Using sorting Method ------------ T.C = O(nlogn); S.C = 0(1)

// function isAnagram(str1, str2) {
//   const lowerstr1 = str1.toLowerCase();
//   const lowerstr2 = str2.toLowerCase();
//   if (lowerstr1.length != lowerstr2.length) {
//     return false;
//   }
//   const sorted1 = lowerstr1.split('').sort().join('');
//   const sorted2 = lowerstr2.split('').sort().join('');
//
//   return sorted1 === sorted2;
// }
//

// ------------- Using Map Method ---------------- T.C = O(n) S.C = o(n)

function createFrequency(str) {
  const map = new Map();
  for (const char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}

function isAnagram(str1, str2) {
  const lowerstr1 = str1.toLowerCase();
  const lowerstr2 = str2.toLowerCase();

  if (lowerstr1.length != lowerstr2.length) {
    return false;
  }
  const map1 = createFrequency(lowerstr1);
  const map2 = createFrequency(lowerstr2);

  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
