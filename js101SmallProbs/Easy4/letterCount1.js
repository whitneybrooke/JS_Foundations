/* eslint-disable max-len */

/*
Write a function that takes a string consisting of
zero or more space separated words and returns an
object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

Copy Code
wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes('');  // {}

input: string
output: object

rules: Words consist of any sequence of non-space characters includes commas, etc
       must return correct count of letters with words
       must be in an object
       number of letters is the key
       count of words is the value
       an empty string = empty object

algorithm:
create empty object variable
split string into an array of words
iterate over each element to count the length
set counter to element length
add to object variable

*/

function wordSizes (string) {
  let countObj = {};
  let array = string.split(' ');
  for (let idx = 0; idx < array.length; idx++) {
    let counter = array[idx].length;
    if (counter === 0) {
      continue;
    }
    if (!countObj[counter]) {
      countObj[counter] = 0;
    }
    countObj[counter] += 1;
  }
  return countObj;
}

function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes('');  // {}
