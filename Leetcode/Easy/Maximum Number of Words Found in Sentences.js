/*
  Maximum Number of Words Found in Sentences
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
	let max = 0;
	for (let i = 0; i < sentences.length; i++) {
		let words = sentences[i].split(' ').length;
		if (max < words) {
			max = words;
		}
	}
	return max;
};

//Solution #2

var mostWordsFound = function (sentences) {
	return Math.max(...sentences.map((s) => s.split(' ').length));
};
