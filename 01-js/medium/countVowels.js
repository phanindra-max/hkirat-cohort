/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    var strArray = str.split('')
    var vowelsArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    var counter = 0;
    strArray.map((element) => {
      if(vowelsArray.indexOf(element) != -1 ) {
        counter += 1
      }
    } )
    return counter
}

module.exports = countVowels;
