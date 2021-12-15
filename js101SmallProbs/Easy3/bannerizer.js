/*
Bannerizer

Write a function that will take a short line of text,
and write it to the console log within a box.

Examples:

Copy Code
logInBox('To boldly go where no one has gone before.');
will log on the console:

Copy Code
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
Copy Code
logInBox('');
+--+
|  |
|  |
|  |
+--+

*/

// input: string
// output: string within a box
// rules: string must have box around it
//        an empty string returns at empty box
//        the corners of the box are crosses
//        the sides are vertical lines
//        the top and bottom are horizontal lines

//

function logInBox () {
  let verticalLines = '|';
  let horizontalLines = '+--+';
}

logInBox('To boldly go where no one has gone before.');
