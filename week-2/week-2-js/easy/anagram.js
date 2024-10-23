/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false
  const str1LowerCase =  str1.toLowerCase()
  const str2LowerCase =  str2.toLowerCase()
  let sortedStr1 = [...str1LowerCase].sort().join()
  let sortedStr2 = [...str2LowerCase].sort().join()
  if (sortedStr1 != sortedStr2) return false
  return true

}

isAnagram('Debit Card', 'Bad Credit')

module.exports = isAnagram;
