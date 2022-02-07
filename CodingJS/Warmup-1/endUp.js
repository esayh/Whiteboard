/*
  Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

Examples

  endUp('Hello') → HeLLO
  endUp('hi there') → hi thERE
  endUp('hi') → HI
 */

function endUp(str) {
	let len = str.length;
	let upper = str.substring(len - 3, len);

	if (len < 3) {
		return str.toUpperCase();
	} else {
		return str.substring(0, len - 3) + upper.toUpperCase();
	}
}
