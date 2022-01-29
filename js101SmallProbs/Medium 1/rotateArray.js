/*
Write a function that rotates an array by moving the first
element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

*/

/*
input: array
output: new array

rules: returns a new array and does not modify original
       empty array returns an empty array
       non-array returns undefined

algorithm
new array variable with slice
save last element to variable
push last element to new array

*/

function rotateArray (arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return arr;
    }
    let newArray = arr.slice(0);
    let firstElement = newArray.shift();
    newArray.push(firstElement); // array.slice(1).concat(array[0]);
    return newArray;
  } else {
    return undefined;
  }
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);
rotateArray();                         // undefined
rotateArray(1);                        // undefined

/* ls version
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
  // this takes a copy of the array at element one and adds element
  // 0 at the end
}

*/