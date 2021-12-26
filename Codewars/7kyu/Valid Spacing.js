/*
  Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. 
  The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. 
 */

function validSpacing(s) {
	let str = s.split(' ');
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '' && str.length > 1) {
			return false;
		}
	}
	return true;
}
