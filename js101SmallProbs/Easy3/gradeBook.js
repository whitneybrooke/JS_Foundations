/*
Write a function that determines the mean (average) of
the three scores passed to it, and returns the letter
associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need
to check for negative values or values greater than 100.

Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
*/
// Algorithm
// take input of 3 numbers
// sum numbers and divde by 3
// switch case for determining letter grade


function getGrade (grade1, grade2, grade3) {
  let sum = (grade1 + grade2) + grade3;
  let score = sum / 3;
  if (score >= 90) {
    return 'A';
  } else  if (score >= 80 ) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
getGrade(30,30,30);
getGrade(80,40,90);
getGrade(85, 80, 75);