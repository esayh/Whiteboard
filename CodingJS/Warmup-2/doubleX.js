/*
  Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

Examples

  doubleX('axxbb') → true
  doubleX('axaxax') → false
  doubleX('xxxxx') → true
 */

function doubleX(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === 'x') {
			if (str.charAt(i + 1) === 'x') {
				return true;
			}
			return false;
		}
	}
	return false;
}
