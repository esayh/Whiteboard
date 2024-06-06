/*
Given a non-negative integer n, 
write a function to_binary/ToBinary which returns that number in a binary format.

Examples: 
toBinary(1) -> should return 1 
toBinary(5) ->  should return 101 
toBinary(11) -> should return 1011 
*/

function toBinary(n){
  let binary = n.toString(2)
  return Number(binary)
}