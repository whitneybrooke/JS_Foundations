// Write a function that takes two arguments, a word and a string of
// text, and returns an integer representing the number of times the
// word appears in the text.

// You may assume that the word and text inputs will always be provided,
// and that all word breaks are spaces. Thus, some words will include
// punctuation such as periods and commas.

/*
input: string
output: integer

rules: the word counts as upper and lower case the same
       words are always text
       all breaks are spaces

algorithm:
set counter variable to zero
save text to new array with split and to lower case
loop through text array
if array element = word
counter += 1
return counter
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord (word, text) {
  let counter = 0;
  let textArr = text.toLowerCase().split(' ');
  for (let element of textArr) {
    if (element === word) {
      counter += 1;
    }
  }
  return counter;
}

searchWord('sed', text);      // 3