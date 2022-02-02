/*
  Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

Examples

  front3('Java') → JavJavJav
  front3('Chocolate') → ChoChoCho
  front3('abc') → abcabcabc
 */

function front3(str) {
	let len = str.length;
	if (len <= 3) return str.repeat(3);
	return str.slice(0, 3).repeat(3);
}
