/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAnAlphabet(char){
	if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
		return true;
	else
		return false;
}

function isPalindrome(str) {
	let finalStr = "";
	for(let i = 0; i < str.length; i++){
		if(isAnAlphabet(str[i])){
			finalStr += str[i].toLowerCase();
		}
	}
	let i = 0;
	let j = finalStr.length - 1;

	while(i < j){
		if(finalStr[i] != finalStr[j])
			return false;
		i++;
		j--;
	}
	return true;
}

module.exports = isPalindrome;
