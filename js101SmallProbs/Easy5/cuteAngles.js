/*

Write a function that takes a floating point number
representing an angle between 0 and 360 degrees and
returns a string representing that angle in degrees,
minutes, and seconds. You should use a degree symbol
(˚) to represent degrees, a single quote (') to represent
minutes, and a double quote (") to represent seconds.
There are 60 minutes in a degree, and 60 seconds in a minute.

Examples:

Copy Code
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Note: your results may differ slightly depending on
how you round values, but should generally be within
a second or two of the results shown.

INPUT: floating point number
OUTPUT: string

rules: use a degree symbol
       (˚) to represent degrees, a single quote (') to represent
       minutes, and a double quote (") to represent seconds.

Algorithm
- take number
- set degrees sign variable
- calculate angle to minutes and seconds
- use interpolation for the degrees, min and secs

let minutes = Math.floor((number - degrees) * 60);
let seconds = Math.floor((number - degrees - (minutes / 60)) * 360);
*/

function dms (number) {
  let degrees = Math.floor(number);
  let minutes = Math.floor((number - degrees) * 60);
  let seconds = Math.floor((number - degrees - (minutes / 60)) * 360);
  let degreeSymbol = '\xB0';
  let string = (String(`${degrees}${degreeSymbol}${minutes}'${seconds}"`));
  return string;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

/*
ls version

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}
*/