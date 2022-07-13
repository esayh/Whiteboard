/*
  In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of 
  uppercase letters, lowercase, numbers and special characters, as follows.

  Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
  --the order is: uppercase letters, lowercase, numbers and special characters.

 */

function solve(s) {
  let upperC = 0
  let lowerC = 0
  let numbers = 0
  let spChars = 0

  s.split("").forEach(el => {
    if (/[a-z]/.test(el)) {
      lowerC++
    } else if (/[A-Z]/.test(el)) {
      upperC++
    } else if (/[0-9]/.test(el)) {
      numbers++
    } else {
      spChars++
    }
  })
  return [upperC, lowerC, numbers, spChars]
  }