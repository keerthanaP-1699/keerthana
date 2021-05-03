/**
 * Create a function that takes numbers as arguments, adds them together,
 * and returns the product of digits until the answer is only 1 digit long.
 * Example:-
 * sumDigProd(16, 28) ➞ 6
 * 16 + 28 = 44
 * 4 4 = 16
 * 1 6 = 6
 * sumDigProd(0) ➞ 0
 * sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
 */

const productOfSum = () => {
  let sum = 0;
  if (arguments.length > 1) {
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    function product(suumm) {
      while (String(suumm).length > 1) {
        suumm = [...String(suumm)].reduce((a, b) => a * b);
      }
      return parseInt(suumm);
    }

    return product(sum);
  } else if (arguments.length == 1) {
    sum = arguments[0];
    if (sum.length == 1) {
      return sum;
    } else {
      return sum % 10;
    }
  } else {
    return "Input required";
  }
};

console.log(productOfSum(125, 300, 58));
console.log(productOfSum(5));
console.log(productOfSum(1, 2, 3, 4, 5, 6));
console.log(productOfSum());
