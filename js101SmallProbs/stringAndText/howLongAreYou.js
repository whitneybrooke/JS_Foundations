/*
Write a function that takes a string as an argument and returns
an array that contains every word from the string, with each word
followed by a space and the word's length. If the argument is an
empty string or if no argument is passed, the function should
return an empty array.

You may assume that every pair of words in the string will be
separated by a single space.

input: string
output: array with strings and numbers

rules: every pair of words ub string will be separated by a space
       return empty array if no argument is passed
       return empty array with empty string

Algorithm:

set empty array counter
split string in array of strings
for each element push string and string.length
as interpolated into array

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
*/

function wordLengths (string) {
  let counterArr = [];
  if (!string || string.length === 0) {
    return counterArr;
  }
  let array = string.split(' ');
  array.forEach((element) => {
    return counterArr.push(`${element} ${element.length}`);
  });
  return counterArr;
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []