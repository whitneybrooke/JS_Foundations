/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/*
Question 1
Given a string, return a new string that replaces every
occurrence of the word "important" with "urgent":
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace('important', 'urgent');

/*
Question 2
The Array.prototype.reverse method reverses the order of elements in an array,
and Array.prototype.sort can rearrange the elements in a variety of ways,
including descending. Both of these methods mutate the original array as
shown below. Write two distinct ways of reversing the array without mutating
the original array. Use reverse for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];

let newArray = numbers.slice().reverse(); // slice returns a new array
console.log(newArray);

let sortedArray = [...numbers].sort(function(a,b) {
  return b - a; // ascending would be a - b
});
console.log(sortedArray);

// Bonus
let reversedArray = [];

numbers.forEach((number) => {
  console.log(reversedArray.unshift(number)); //unshift adds to start of array
}); // takes each number starting with the first from numbers array
// and adds it to the reversed array at the beginning. so starts with
// 1, then adds 2 at the beginning, then 3 at the beg and so on

/*
Question 3
Given a number and an array, determine whether the number is
included in the array.
*/

let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers2.includes(number1);
numbers2.includes(number2);

/*
Question 4
Starting with the string:
let famousWords = "seven years ago...";
show two different ways to put the expected "Four score and " in front of it.
*/

let famousWords = "seven years ago...";
let fourScore = 'Four score and';
console.log(fourScore + ' ' + famousWords);
console.log(fourScore.concat(' ', famousWords));
console.log('Four score and ' + famousWords);

/*
Question 5
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by
removing the number at index 2, so that the array becomes [1, 2, 4, 5].
*/

let nums = [1,2,3,4,5];
nums.splice(2, 1); // starts at the index number 2 then takes away 1
console.log(nums);

/*
Question 6
Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Nesting data structures like we do here is commonplace in JavaScript
and programming in general. We'll explore this in much greater depth
in a future Lesson. Create a new array that contains all of the above
values, but in an un-nested format:
*/

let flinstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flinstones.flat();
// or
let newFlinstones = [].concat(...flinstones); // starts with empty array
// then ...spreads the names in one at a time

/*
Question 7

Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Create an array from this object that contains only two elements:
Barney's name and Barney's number:

[ 'Barney', 2 ]
*/

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let flintstonesArr = Object.entries(flintstones); // creates an array with each value pair
/*
[
  [ 'Fred', 0 ],
  [ 'Wilma', 1 ],
  [ 'Barney', 2 ],
  [ 'Betty', 3 ],
  [ 'Bambam', 4 ],
  [ 'Pebbles', 5 ]
]
*/
let barneyArr = flintstonesArr[2]; // access element at index 2

/*
Question 8
How would you check whether the objects assigned to variables
numbers and table below are arrays?
*/

let numbers3 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers3);
Array.isArray(table);

/*
Question 9
Back in the stone age (before CSS), we used spaces to align things
on the screen. If we have a 40-character wide table of Flintstone
family members, how can we center the following title above the table with spaces?
*/

let title = "Flintstone Family Members";
let padNumber = Math.floor((40 - title.length) / 2);
title.padStart(padNumber + title.length);

/*
To center some text, we need to pad it on the left with some spaces.
The hard part here is determining how many spaces you need. You can
determine the correct value by subtracting the length of the string
from the desired width, then dividing that result by 2. That gives
you the number of spaces you need on the left, and an equivalent
number of spaces on the right, after allowance for rounding. Once we
know how many spaces we need on the left, we can use padStart to pad
the original string to a length that includes those additional spaces.
*/


/*
Question 10
Write two one-line expressions to count the number of lower-case t
characters in each of the following strings:
*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(function(element) { // function declaration
  return element === 't'.length; // split '' returns an array
}); // filter then goes through each letter to find t, adds the t's
// together get the length of 't'

statement1.split('').filter(element => element === 't'.length); // function expression
statement2.split('').filter(element => element === 't'.length);
