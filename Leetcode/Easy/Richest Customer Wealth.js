/*
  You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
  Return the wealth that the richest customer has.

  A customer's wealth is the amount of money they have in all their bank accounts. 
  The richest customer is the customer that has the maximum wealth.
 */

/** Solution #1
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let maxWealth = 0;
	for (let i = 0; i < accounts.length; i++) {
		let total = accounts[i].reduce((a, b) => a + b);

		if (maxWealth < total) {
			maxWealth = total;
		}
	}
	return maxWealth;
};

/** Solution #2
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let m = accounts.length;
    
    let maxW = 0
    
    for(let i = 0; i < m; i++) {
        let sum = 0
        for(let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
        }
        maxW = Math.max(maxW, sum)
    }
    return maxW
    
};
