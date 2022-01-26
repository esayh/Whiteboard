/*
  Story
You got a gift card for your local store. It has some credit you can use to buy things, but it may be used only for up to two items, and any credit you don't use is lost. You want something for a friend and yourself. Therefore, you want to buy two items which add up the entire gift card value.

  Task
You will get the value of the gift card c and a finite list of item values. You should return a pair of indices that correspond to values that add up to c:

buy(2,[1,1])       = [0,1]
buy(3,[1,1])       = null
buy(5,[5,2,3,4,5]) = [1,2]
 */

var buy = function (x, arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === x) {
				return [i, j];
			}
		}
	}
	return null;
};
