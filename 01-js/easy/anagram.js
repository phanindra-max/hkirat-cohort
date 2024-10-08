/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // if the length of the strings are not equal, then they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2 || (str1 === '' & str2 === '')) {
    return true;
  }
  // sort the strings and compare if they are equal
  const str1Arr = str1.toLowerCase().split('').sort();
  const str2Arr = str2.toLowerCase().split('').sort();
  
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== str2Arr[i]) {
      return false;
    }
  }

  return true;

}


console.log(isAnagram('Debit Card', 'Bad Credit')); // false
module.exports = isAnagram;
