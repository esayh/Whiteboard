/*
  Given a sequence of nums, find the largest pair first in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
 */

//Solution #1
function largestPairSum(nums) {
	let first = -Infinity;
	let second = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > first) {
			second = first;
			first = nums[i];
		} else if (nums[i] > second) {
			second = nums[i];
		} else continue;
	}
	return first + second;
}

//Solution #2
function largestPairSum(nums) {
	nums.sort((a, b) => b - a);
	return nums[0] + nums[1];
}
