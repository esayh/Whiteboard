/*
  Given a string, return a new string where the first and last chars have been exchanged.

Examples

  frontBack('code') → eodc
  frontBack('a') → a
  frontBack('ab') → ba
 */

function frontBack(str) {
	let len = str.length;
	if (len === 1) {
		return str;
	}
	let mid = str.slice(1, len - 1);
	return str.slice(len - 1) + mid + str.charAt(0);
}
