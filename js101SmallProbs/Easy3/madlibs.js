/*
Madlibs is a simple game where you create a story template
with "blanks" for words. You, or another player, then
construct a list of words and place them into the story,
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun,
a verb, an adverb, and an adjective, and injects them into
a story that you create.

Example:

Copy Code
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/

/*
input: strings
output: new string

rules: must create a story for the end string
       must take user input from keyboard

edge cases include: empty strings, numbers

Create a program that asks for a noun, verb, adjective, adverb
Then interpolate those words into a string
*/

/*
Algorithm
create prompt to ask user for noun, then verb, then adjective, then adverb
store each into a variable
log the variables into a story
*/

let readline = require('readline-sync');

function prompt (message) {
  console.log(message);
}
console.clear();
prompt('Welcome to Madlibs!');

prompt('Please enter a noun.');
let noun = readline.question();

prompt('Please enter a verb.');
let verb = readline.question();

prompt('Please enter a adverb.');
let adverb = readline.question();

prompt('Please enter a adjective.');
let adjective = readline.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb + 's'} ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb + 's'} up ${adjective} Joe's turtle.`);