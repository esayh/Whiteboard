/*
  Isn't it annoying how "string".replace("find", "replace"); only replaces the first match of the find string? 
  Write a function, replaceAll(input, find, replace); 
  that will replace all matches of the given find string with the given replace string.

  The function will always be called with three strings, so don't worry about validating the arguments.

  As with the original "string".replace(find, replace), if find is an empty string, it should match in-between each character, 
  effectively inserting replace in-between each character, including the start and end of the string. 
  I've given you some tests for this to make it a little clearer.
 */

function replaceAll(input, find, replace) {
  if(!input && !find) return replace
  
  if(!find) return replace + input.split("").join(replace) + replace
  
  let str = ""
  
  for(let i = 0; i < input.length; i++) {
    if(input.slice(i, i + find.length) == find) {
      str += replace
      
      i += find.length-1
    } else {
      str += input[i]
    }
  }
  return str
}