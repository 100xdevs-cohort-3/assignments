/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1,str2){
  /*
  const sortString1=str1.sort();//sort is not a function in js
  const sortString2=str2.sort();
  */

  //sort the string in js
  //we can sort the array in js so first we split string into array "puja"=>["p","u","j","a"]=>["a","j","p","u"] sort this array then join the "ajpu"

  //steps
  //lowercase
  //split
  //join(converting the array into string)
  //split by delimeter eg str.split("a")   harkirat ["h","rkir","t"]

  //str,join ==> dont mutate in variable
  //sort=>mutate in variable

  const lowerCaseString1=str1.toLowerCase();
  const arr1=lowerCaseString1.split("") //puj=["p","u","j"]
  arr1.sort(); //["j","p","u"]
  const sortString1=arr1.join(""); //join them "jpu"

  const lowerCaseString2=str2.toLowerCase();
  const arr2=lowerCaseString2.split("");
  arr2.sort();
  const sortString2=arr2.join("");



  if(sortString1==sortString2){
      return true;

  }else 
      return false;

}


isAnagram("aabbcc","ccbbaa");

//for run this go to that folder then "node <filename>.js <-|"

/*
function isAnagram(str1,str2){
  const sortString1=str1.toLowerCase().split("").sort().join("");
  const sortString12=str2.toLowerCase().split("").sort().join("");

  if(sortString1==sortString2){
      return true;

  }else 
      return false;
}

isAnagram("aabbcc","ccbbaa");

*/

module.exports = isAnagram;
