/*
Combining Arrays

Write a function that takes two arrays as arguments
and returns an array containing the union of the values
from the two. There should be no duplication of values
in the returned array, even if there are duplicates in
the original arrays. You may assume that both arguments
will always be arrays.

Example:

Copy Code
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

input: two arrays
output: one array

rules: returned array with no duplicates
arguments will always be arrays

algorithm

take each array and concat togetber
use for each to remove duplicates
if does not include element, then remove

*/

function union (arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let finalArr = [];
  newArr.forEach(element => {
    if (!finalArr.includes(element)) {
      finalArr.push(element);
    }
  });
  return finalArr;
}
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
union([4, 5, 6, 5], [6, 7, 8, 4]); // [4, 5, 6, 7, 8]

// OR

function union2 (arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let uniqueArr = [...new Set(newArr)];
  return uniqueArr;
}

union2([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
union2([4, 5, 6, 5], [6, 7, 8, 4]); // [4, 5, 6, 7, 8]