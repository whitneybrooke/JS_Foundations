// The function from the previous exercise returns the number of occurrences
// of a word in some text. Although this is useful, there are also situations
// in which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and some text as
// arguments, and returns the text with every instance of the word highlighted.
// To highlight a word, enclose the word with two asterisks ('**') on each
// side and change every letter of the word to uppercase
// e.g., '**HIGHLIGHTEDWORD**').

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

function searchWord (word, text) {
  let str = '';
  let textArr = text.toLowerCase().split(' ');
  for (let element of textArr) {
    if (element === word) {
      str += `**${element.toUpperCase()}** `;
    } else {
      str += element + ' ';
    }
  }
  return str;
}

searchWord('sed', text);

