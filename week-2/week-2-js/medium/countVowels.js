/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

/* function countVowels(str) {
    // Your code here
    const vowels = {"a": 1, "e" : 1, "i" : 1, "o" : 1, "u" : 1};
	let count = 0;
    for(let character of str){
		character = character.toLowerCase();
		if (vowels[character]){
			count += 1;
		}
    }
	return count
} */

//using regex
const countVowels = str => {
	return (str.match(/[aioue]/gi) || []).length;
}

console.log(countVowels("abcdefg"));


module.exports = countVowels;