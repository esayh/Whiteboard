/*
  Given a string S. You have to return another string such that even-indexed and odd-indexed 
  characters of S are grouped and groups are 
  space-separated (see sample below)

  Note: 
  0 is considered to be an even index. 
  All input strings are valid with no spaces

  input: 'CodeWars'
  output 'CdWr oeas'

  Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
  odd ones are 1, 3, 5, 7, so the second group is 'oeas'
  And the final string to return is 'Cdwr oeas'
 */

function sortMyString(S) {
	let sort = S.split('');
	let even = [];
	let odd = [];
	for (let i = 0; i < sort.length; i++) {
		if (i % 2 === 0) {
			even.push(sort[i]);
		} else if (i % 2 === 1) {
			odd.push(sort[i]);
		}
	}
	return even.concat(' ', odd).join('');
}
