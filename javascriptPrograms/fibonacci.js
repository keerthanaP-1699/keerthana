/**
 * Create a function that takes a number n and
 * returns the difference between the nth iccanobiF number and the nth Fibonacci number.
 */

function iccMinusFib(num) {
  /**
   * if the number less than 9 return 0
   * else create fibonacci series and reverse fibo and find the difference
   */

  if (num >= 9) {
    /**
     * generate fibonacci series
     * Fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
     * as the condition given as above 9 we no need to generate the 1st 8 values
     */

    var arr1,
      arr2,
      x = 8,
      y = 13,
      x1 = 8,
      y1 = 31;
    for (let i = 1; i <= num - 8; i++) {
      arr1 = x + y;
      x = y;
      y = arr1;
    }

    /**
     * generate a fibonacci series by reversing the previous values
     * 31 (8 + 31 = 39).
     * 31 + 93 = 124...
     * iccanobiF = [0, 1, 1, 2, 3, 5, 8, 13, 39, 124]
     */

    for (let j = 1; j <= num - 8; j++) {
      arr2 = x1 + y1;
      x1 = y1;
      y1 = parseInt(arr2.toString().split("").reverse().join(""));
    }

    /** find the difference between normal fibo and reverse fibo of last element */

    return arr2 - arr1;
  } else {
    return 0;
  }
}

console.log(iccMinusFib(9)); //18
console.log(iccMinusFib(18)); //790920
