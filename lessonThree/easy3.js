/*
Question 1
Write three different ways to remove all of the elements from the
following array:
*/

let numbers = [1,2,3,4];

numbers.length = 0;

numbers.splice(0, numbers.length);

while (numbers.length) {
  numbers.pop();
}

/*
Question 2
What will the code output?
console.log([1,2,3] + [4,5]); // 1,2,34,5
*/

/*
Question 3
What will the following code ouput?
*/


/*
Question 4
What will the following code ouput?
*/
let arr1 = [{first: "value1"}, {second: 'value2'}, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
Question 5
The following function unneccessarily uses two return statements
to return boolean values. Rewrite the function so it only has one
return state and does not explicitly use true or false
*/

function isColorValid (color) {
  if (color === 'blue' || color === 'green') {
    return true;
  } else {
    return false;
  }
}
// =====================================
function isColorValid (color) {
  return color === 'blue' || color === 'green';
}
// the same as an arrow function
let isColorValid = color => color === 'blue' || color === 'green';

// array.prototype.includes, useful for more than 2 choices:
const isColorValid = color => ['blue', 'green'].includes(color);

function isColorValid (color) {
  return ['blue', 'green'].includes(color);
}