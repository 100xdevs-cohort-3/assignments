/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  function Sort(str) {
    return str
      .toLowerCase() // Convert to lowercase
      .split("") // Split into an array of characters
      .sort() // Sort the characters
      .join(""); // Join back into a string
  }

  return Sort(str1) === Sort(str2);
}

module.exports = isAnagram;
