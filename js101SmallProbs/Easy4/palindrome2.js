/*
Write another function that returns true if the string passed
as an argument is a palindrome, or false otherwise. This time,
however, your function should be case-insensitive, and should
ignore all non-alphanumeric characters. If you wish, you may
simplify things by calling the isPalindrome function you wrote
in the previous exercise.
*/

/*
input: string
output: boolean

rules: inputs do not matter like case and non-alphabet or numeric characters

algorithm

remove all non-alphanumeric characters and save to new variable
 - loop through string and compare to non alpha numeric characters
 - skip if space is involved
 - if alphanumeric, add to new variable
split and reverse the string to check if equal to original string
*/


function isRealPalindrome (string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if ((string[idx] >= 'a' && string[idx] <= 'z') || (string[idx] >= 'A' && string[idx] <= 'Z')) {
      newString += string[idx];
    } else if (string[idx] >= '0' && string[idx] <= '9') {
      newString += string[idx];
    }
  }
  return isPalindrome(newString.toLowerCase());
}

function isPalindrome (string) {
  return string === string.split('').reverse().join('');
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

isPalindromicNumber();

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false


/*
function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}
*/