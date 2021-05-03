/**
 * It has one parameter: an array of n numbers.
 * The function must find and return the second largest number in nums.
 */

const secLargest = (num) => {
  let largest = num[0];
  let slarge = num[1] < largest ? num[1] : largest;
  for (let i = 2; i < num.length; i++) {
    if (num[i] > largest) {
      slarge = largest;
      largest = num[i];
    }
    if (num[i] > slarge && num[i] < largest) {
      slarge = num[i];
    }
  }
  return slarge;
};

console.log(secLargest[(10, 25, 33, 5, 21)]);
