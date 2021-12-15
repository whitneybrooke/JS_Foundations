/*
Write a function that takes a positive integer, n,
as an argument and logs a right triangle whose sides
each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one
end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

Copy Code
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

/*
input: integer
output: triangle of stars
rules:
    - the diagonal side of the triangle must have one end
    at the lower-left of the triangle, and the other end at the upper-right.
   -  the length of the triangle starts with one star and ends
    with the number of stars of the input integer
*/

/*
Algorithm
- declare stars string value at 1 star
- set pad number at empty string
- set variable for repeat the stars
- set variable for repeat pad number
- as number is less than integer, loop and increase repeat
- loop and decrease pad number
- print num of stars increment and pad number decrease
*/

function triangle (integer) {
  let stars = '*';
  let padNumber = ' ';
  let repeat = 0;
  let spaces = integer - 1;
  let numberTotal = 1;
  while (numberTotal <= integer) {
    numberTotal += 1;
    repeat += 1;
    spaces -= 1;
    console.log(padNumber.repeat(spaces) + stars.repeat(repeat));
  }
}

triangle(9);
