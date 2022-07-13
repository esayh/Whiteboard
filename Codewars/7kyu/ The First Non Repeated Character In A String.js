/*
    You need to write a function, that returns the first non-repeated character in the given string.

    If all the characters are unique, return the first character of the string.
    If there is no unique character, return null in JS or Java, and None in Python.

    You can assume, that the input string has always non-zero length.

    Example :
              firstNonRepeated("test") // returns "e"
              firstNonRepeated("teeter") // returns "r"
              firstNonRepeated("trend") // returns "t" (all the characters are unique)
              firstNonRepeated("aabbcc") // returns null (all the characters are repeated)

*/

function firstNonRepeated(s) {
  let obj = {}
  
  for(const char of s) {
    obj[char] ? obj[char]++ : obj[char] = 1
  }
  
  for(const key in obj) {
    if(obj[key] === 1) {
      return key
    }
  }
  return null
}