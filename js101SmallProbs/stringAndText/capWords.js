// Write a function that takes a string as an argument and
// returns that string with the first character of every
// word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

/*
input: string
output: string

rules: words are all non-whitespace chars
       empty string returns?
       first letter must be capital, all others lowercase

algorithm
save string to split array
new array variable
loop through array and capitalize each element at 0 index
push to new array
return array.join

*/

function wordCap (string) {
  let array = string.split(' ');
  let newArr = [];
  array.map((element) => {
    newArr.push(element.slice(0, 1).toUpperCase() + element.slice(1));
    return undefined;
  });
  return newArr.join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    //'This Is A "quoted" Word'

// LS
// function wordCap(words) {
//   return words
//    .split(" ")
//    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//    .join(" ");
// }