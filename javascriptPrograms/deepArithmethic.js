/**
 * Write a function that takes an array of strings of arbitrary
 * dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.
 * sum(["1", "five", "2wenty", "thr33"]) ➞ 36
 * sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099
 * sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759
 */

const sum = (arr) => {
  let out = 0;
  let str = arr.flat().join(",").match(/-?\d+/g);
  if (str != null) {
    for (let i = 0; i < str.length; i++) {
      out += parseInt(str[i]);
    }
    return out;
  } else {
    return 0;
  }
};

console.log(sum(["1", "five", "2wenty", "thr33"]));
console.log(sum([["1X2", "t3n"],["1024", "5", "64"],]));
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]]));
