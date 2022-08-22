/*
	Given an array nums of size n, return the majority element.

	The majority element is the element that appears more than ⌊n / 2⌋ times. 
	You may assume that the majority element always exists in the array.

Example 1:

	Input: nums = [3,2,3]
	Output: 3

Example 2:

	Input: nums = [2,2,1,1,1,2,2]
	Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
	let obj = {};
	
	for(let elem of nums) {
			if(obj[elem]) {
					obj[elem] += 1
			} else {
					obj[elem] = 1
			}
	}
	return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b)
};