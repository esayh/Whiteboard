/*
  Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

Examples

  delDel('adelbc') → abc
  delDel('adelHello') → aHello
  delDel('abcdel') → abcdel
 */

function delDel(str) {
	if (str.startsWith('del', 1)) {
		return str.charAt(0) + str.substring(4, str.length);
	}
	return str;
}
