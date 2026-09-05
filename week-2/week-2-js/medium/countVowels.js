function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
module.exports = countVowels;
