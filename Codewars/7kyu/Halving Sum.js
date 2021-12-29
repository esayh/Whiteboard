/*
  Given a positive integer n, calculate the following sum:

  n + n/2 + n/4 + n/8 + ...

  Example:
  25  =>  25 + 12 + 6 + 3 + 1 = 47
 */

function halvingSum(n) {
	let sum = 0;
	while (n >= 1) {
		sum += n;
		n = Math.floor(n / 2);
	}
	return sum;
}
