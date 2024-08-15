/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  let str1Obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Obj[str1[i]]) {
      //if letter in str1 aready exists in str1Obj ; increment
      str1Obj[str1[i]]++;
    } // add letter as a key and give a value of 1
    else {
      str1Obj[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    //if letter in str2 in str1obj decrement value
    if (str2[i] in str1Obj) {
      str1Obj[str2[i]]--;
    } else {
      //if letter in str2 missing in str1obj return false
      return false;
    }
  }

  for (let key in str1Obj) {
    if (str1Obj[key] !== 0) {
      return false;
    }
  }
  return true;
}

// console.log(isAnagram("Racecar", "racecar"));

module.exports = isAnagram;
