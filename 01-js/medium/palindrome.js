/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str_array = str.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g,"").replace(/\s/g, '').toLowerCase().split('')
  str_reverse = JSON.parse(JSON.stringify(str_array))
  str_reverse.reverse()
  if (JSON.stringify(str_array) == JSON.stringify(str_reverse)) return true
  else return false
}

console.log(isPalindrome("Alas, sala"))

module.exports = isPalindrome;
