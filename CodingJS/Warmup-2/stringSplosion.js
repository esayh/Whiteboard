/*
  Given a non-empty string like "Code" return a string like "CCoCodCode".

Examples

  stringSplosion('Code') → CCoCodCode
  stringSplosion('abc') → aababc
  stringSplosion('ab') → aab
 */

function stringSplosion(str) {
	let s = '';

	for (let i = 0; i <= str.length; i++) {
		s += str.substring(0, i);
	}
	return s;
}
