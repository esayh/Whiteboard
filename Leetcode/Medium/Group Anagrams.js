/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once

Example 1:

  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

  Input: strs = [""]
  Output: [[""]]

Example 3:

  Input: strs = ["a"]
  Output: [["a"]]
 */

  /**
 * @param {string[]} strs
 * @return {string[][]}
 */

  //Solution #1
var groupAnagrams = function(strs) {
  const res = [];
  const map = new Map();
  
  for(let i = 0; i < strs.length; i++) {
      const srtd = strs[i].split('').sort().join('');
      
      if(map.has(srtd)) {
          map.get(srtd).push(strs[i])
      } else {
          map.set(srtd, [strs[i]])
      }
  }
  
  for(let [key, value] of map) {
      res.push(value)
  }
  return res
};

  //Solution #2

  var groupAnagrams = function(strs) {
    
    let obj = {};
    
    for(let str of strs) {
        
        let word = str.split('').sort().join('');
        obj[word] ? obj[word].push(str) : obj[word] = [str];
    }
    return Object.values(obj);
};

