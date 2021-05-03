/**
 * Create a function that will build a staircase using the underscore _ and hash # symbols. 
 * A positive value denotes the staircase's upward direction and downwards for a negative value.
 * staircase(3) ➞ "__#\n_##\n###"
 * Notes:-
 * All inputs are either positive or negative values.
 * The string to be returned should be adjoined with the newline character \n. 
 */

const stairCase = (n) => {
  let arr = [];
  let negval = n < 0;
  for (let i = 1; i <= Math.abs(n); i++) {
    arr.push("_".repeat(Math.abs(n) - i) + "#".repeat(i));
  }
  negval ? (arr = arr.reverse().join("\n")) : (arr = arr.join("\n"));
  return arr;
};

console.log(stairCase(3));
console.log(stairCase(-3));
