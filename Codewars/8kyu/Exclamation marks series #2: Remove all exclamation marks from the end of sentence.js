/*
  Remove all exclamation marks from the end of sentence.

  Examples
  remove("Hi!") => "Hi"
  remove("Hi!!!") => "Hi"
  remove("!Hi") => "!Hi"
  remove("!Hi!") => "!Hi"
  remove("Hi! Hi!") => "Hi! Hi"
  remove("Hi") => "Hi"
  */

function remove(s) {
	let string = s;
	while (string[string.length - 1] === '!') {
		string = string.slice(0, -1);
	}
	return string;
}
