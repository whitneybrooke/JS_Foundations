/* eslint-disable no-unused-vars */
/* eslint-disable use-isnan */
// ASCII Art

// output "The Flinstones Rock!" 10 times
// each line indented one space to the right

// function takes string
// prints it 10 times indented one space
// each loop increase space at beginning of string

function repeatWithSpace (string) {
  let padNumber = 0;
  for (let num = 0; num <= 10; num++) {
    padNumber++;
    console.log(string.padStart(padNumber + string.length));
  }
}

repeatWithSpace('The Flintstones Rock!');
// or
function repeatWithSpaces (string) {
  for (let padNum = 0; padNum <= 10; padNum++) {
    console.log(string.padStart(padNum + string.length));
  }
}

repeatWithSpaces('The Flintstones Rock!');

// LS answer
for (let padding = 0; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + 'The Flintstones Rock!');
}

/*
Question 2
let munstersDescription = 'The Munsters are creepy and spooky.';
Return a new string that swaps cases: tHE mUNSTERS ARE CREEPY AND SPOOKY.
*/

let munstersDescription = 'The Munsters are creepy and spooky.';

function changeCases (string) {
  let newString = '';
  for (let index = 0; index < string.length; index++) {
    if (string.charAt(index) === string.charAt(index).toLowerCase()) {
      newString += string.charAt(index).toUpperCase();
    } else {
      newString += string.charAt(index).toLowerCase();
    }
  }
  return newString;
}

changeCases(munstersDescription);

// LS answer

munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

/*
Question 3 Number and Divisor
*/

function factors (number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

factors(10);
factors(-10);

function newFactors (number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

newFactors(10);
newFactors(-10);


// Question 4

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let array = [1, 2, 3, 4];
addToRollingBuffer1(array, 4, 5); // [ 2, 3, 4, 5 ]
console.log(array);
// array = [ 2, 3, 4, 5 ]

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let array2 = [1, 2, 3, 4];
addToRollingBuffer2(array2, 4, 5); // [ 2, 3, 4, 5 ]
console.log(array2);
// array = [1, 2, 3, 4];

// .push mutates the original array and concat does not and returns a new array


/*
Question 5
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

0.8999999999999999
false

If you thought that the outputs would be 0.9 and true, respectively,
you were wrong. JavaScript uses floating point numbers for all numeric
operations. Most floating point representations used on computers lack
a certain amount of precision, and that can yield unexpected results like these.

*/

/*
Question 6
What do you think the following code will output?

The output is false. NaN -- not a number -- is a special numeric
value that indicates that an operation that was intended to return
a number failed. JavaScript doesn't let you use == and === to
determine whether a value is NaN.

To test whether the value is NaN, we use the Number.isNaN() method
*/

let nanArray = [NaN];
console.log(nanArray[0] === NaN);

console.log(Number.isNaN(nanArray[0])); // true ==> test if something is NaN

// Question 7
// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}
let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34 --> answer is immutable
// therefore it's 42 - 8 = 34


// Question 8
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    console.log(familyMember["age"] += 42);
    console.log(familyMember["gender"] = "other");
  });
}
// Object.values() method returns an array of a given
// object's own enumerable property values
// for each then iterates over each value and adds
// 42 to age and changes every gender to other

/*
Question 9
Function and method calls can take expressions as arguments.
Suppose we define a function named rps as follows, which follows
the classic rules of the rock-paper-scissors game, but with a slight twist:
in the event of a tie, it just returns the choice made by both players.
*/

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps('paper', "rock")); // paper

// Question 10

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());

// foo evals to yes, in bar - foo is yes and
// asks if no. foo is yes so it returns no

// another example:

function foo1(param = "1") {
  return "2";
}

function bar1(param = "2") {
  return param === "1" ? "yes" : "no";
}

bar(foo());