/*
  Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

Examples

  array123([1,2,9,3,4]) → false
  array123([1,2,3,4,9]) → true
  array123([9,8,1,2,3,4]) → true
 */

function array123(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
			return true;
		}
	}
	return false;
}
