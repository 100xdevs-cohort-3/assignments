function isAnagram(str1, str2) {
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
        return false;
    }
  
    // Helper function to sort characters in a string
    function sortString(str) {
        return str.toLowerCase().split('').sort().join('');
    }
  
    // Sort and compare the sorted strings
    return sortString(str1) === sortString(str2);
  }
  
  module.exports = isAnagram;
  