/* eslint-disable no-unused-vars */
/*
Question 1
Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];

There shouldn't be an error. JS will just say undefined for the
empty slots. Then the numbers[4] will return undefined because it was empty.
*/

/*
Question 2
How can you determine whether a given string ends with an exclamation mark (!)?

*/
let str1 = "Come over here!"; // true
let str2 = "What's up";

str1.endsWith('!');
str2.endsWith('!');

/*
Question 3
Determine whether the following object of people
and their age contains an entry for 'Spot':
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty('Spot'); // false

/*
Question 4

Using the following string, create a new string that contains all lowercase
letters except for the first character, which should be capitalized.
(See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newMunstersDesc = munstersDescription.slice(0, 1).toUpperCase() +
munstersDescription.slice(1).toLowerCase();

// let newMunstersDesc = munstersDescription.charAt(0).toUpperCase() +
// munstersDescription.slice(1).toLowerCase();

console.log(newMunstersDesc);

/*
Question 5
What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false
*/

/*
Question 6
We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };
*/

let ages1 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages1, additionalAges); // target, source

/* Question 7
Determine whether the name Dino appears in the strings below --
check each string separately):
*/

let string1 = "Few things in life are as important as house training your pet dinosaur.";
let string2 = "Fred and Wilma have a pet dinosaur named Dino.";

string1.includes('Dino');
string2.includes('Dino');

/*
Question 8
How can we add the family pet, "Dino", to the following array?
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino'); // adds to end
flintstones.unshift('Dino'); // adds to beginning

/*
Question 9
In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

How can we add multiple items to our array? ('Dino' and 'Hoppy')
*/

flintstones.push('Dino', 'Happy');

/*
Question 10
Return a new version of this sentence that ends just before the word house.
Don't worry about spaces or punctuation: remove everything starting from
the beginning of house to the end of the sentence.
// Expected return value:
// => 'Few things in life are as important as '
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.slice(0, advice.indexOf('house'));