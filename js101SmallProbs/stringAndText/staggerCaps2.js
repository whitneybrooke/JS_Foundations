/* eslint-disable max-len */
// Modify the function from the previous exercise so it ignores
// non-alphabetic characters when determining whether it should
// uppercase or lowercase each letter. The non-alphabetic characters
// should still be included in the return value; they just don't
// count when toggling the desired case.

// examples

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(char => {
      char = char.toLowerCase();
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS")); // "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers")); // "IgNoRe 77 ThE 444 nUmBeRs")