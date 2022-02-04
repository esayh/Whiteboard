/*
  Given three int values, a b c, return the largest.

Examples

  intMax(1, 2, 3) → 3
  intMax(1, 3, 2) → 3
  intMax(3, 2, 1) → 3
 */

function intMax(a, b, c) {
	if (a > b && a > c) {
		return a;
	}
	if (b > a && b > c) {
		return b;
	}
	if (c > a && c > b) {
		return c;
	}
}

function intMax(a, b, c) {
	let temp = Math.max(a, b);
	let max = Math.max(temp, c);
	return max;
}
