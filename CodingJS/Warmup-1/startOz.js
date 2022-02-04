/*
  Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

Examples

  startOz('ozymandias') → oz
  startOz('bzoo') → z
  startOz('oxx') → o
 */

function startOz(str) {
	if (str.startsWith('oz')) {
		return 'oz';
	} else if (str.startsWith('z', 1)) {
		return 'z';
	} else if (str.startsWith('o')) {
		return 'o';
	}
	return '';
}
