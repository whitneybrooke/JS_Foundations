/* Write a function that takes two strings as arguments,
determines the length of the two strings, and then returns
the result of concatenating the shorter string, the longer
string, and the shorter string once again. You may assume
that the strings are of different lengths.

Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

*/

function shortLongShort (arg1, arg2) {
  if (arg1.length > arg2.length) {
    return arg2 + arg1 + arg2;
  } else {
    return arg1 + arg2 + arg1;
  }
}

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh');
shortLongShort('', 'xyz');