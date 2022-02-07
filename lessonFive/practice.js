/* eslint-disable indent */
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  console.log(element1);
  return element1.forEach(element2 => { // forEach does NOTHING with the values here
    console.log(element2);
    return element2.filter(element3 => {
      console.log(element3);
      return element3.length > 0;
    });
  });
});
// [ undefined, undefined ]

[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  console.log(element1);
  return element1.map(element2 => { // use map to return a new array
    console.log(element2);
    return element2.filter(element3 => {
      console.log(element3);
      return element3.length > 0;
    });
  });
}); // [ [ [], [], [], [] ], [ [ 'a' ], [ 'b' ], [ 'c' ] ] ]
// same code:
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.map(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// [ [ [], [], [], [] ], [ [ 'a' ], [ 'b' ], [ 'c' ] ] ]


[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  console.log(arr);
  return arr.map(elem => {
    console.log(elem);
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map((number) => {
        console.log(number);
        return number + 1;
      });
    }
  });
});

// [ [ 1, 2 ], [ 3, 4 ] ] ==== arr, this is the first map

// first element
                // [ 1, 2 ]  not a number so must map again, second map
                // 1 ===== number, third map
                // 2 ===== number, third map
                // [ 3, 4 ] not a number so must map again, second map
                // 3 === number, third map
                // 4 === number, third map

// second element
                // [ 5, 6 ] ==== arr, this is the first map
                // 5 ==== number, second map
                // 6 ==== number, second map

//  each number has 1 added to it and is mapped to new array

// [ [ [ 2, 3 ], [ 4, 5 ] ], [ 6, 7 ] ]