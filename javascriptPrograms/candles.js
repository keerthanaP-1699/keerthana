/**
 * You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 * candles=[4,4,1,3]  The maximum height candles are 4 units high. There are 2 of them, so return 2.
 */

const candles = (array) => {
  var max = Math.max(...array);
  var result = array.filter((c) => c === max);
  return result.length;
};

console.log(candles([4, 4, 1, 3]));
