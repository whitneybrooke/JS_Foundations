/*
Write a function that takes an array of numbers and
returns an array with the same number of elements,
but with each element's value being the running total from the original array.

Examples:

Copy Code
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

input: array
output; array

rules: empty array returns empty

algorithm

create new array variable
loop through original array
add each element together and push result to new array

*/

function runningTotal (arr) {
  let newArr = [];
  let total = 0;
  for (let element of arr) {
    newArr.push(element + total);
    total += element;
  }
  return newArr;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

/*
function runningTotal (array) {
  let newArray = [];
  for (let element of array) {
    newArray.push(element + element) // this will double the
                                        element and does not work
    [2, 5, 13] returns as [4, 10, 26]
    console.log(newArray);
  }
  return newArray;
}
*/

// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     resultArray.push((sum += array[idx]));
//   }

//   return resultArray;
// };