/*
  Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. 
  Note that Math.abs(n) returns the absolute value of a number.

Examples

  close10(8, 13) → 8
  close10(13, 8) → 8
  close10(13, 7) → 0
 */

function close10(a, b) {
	let num1 = Math.abs(a - 10);
	let num2 = Math.abs(b - 10);

	if (num1 < num2) {
		return a;
	}
	if (num1 > num2) {
		return b;
	}
	return 0;
}
