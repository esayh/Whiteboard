/*
  Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. 
  So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.

Examples

  stringMatch('xxcaazz', 'xxbaaz') → 3
  stringMatch('abc', 'abc') → 2
  stringMatch('abc', 'axc') → 0
 */

function stringMatch(a, b) {
  let count = 0;
  let min = Math.min(a.length, b.length);

  for (let i = 0; i < min - 1; i++) {
    if (a.substring(i, i + 2) === b.substring(i, i + 2)) {
      count++;
    }
  }
  return count;
}