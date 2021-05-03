/**
 * get a string if string length is not more than 3
 * return the string r return first and last 3 char of the string together
 * */

const check = (str) => {
  if (str.length < 3) {
    return str;
  } else {
    return str.slice(0, 3) + str.slice(-3);
  }
};

console.log(check("keerthana"));
console.log(check("kee"));
console.log(check("ke"));

//Check if a string (first argument, str) ends with the given target string (second argument, target).
const confirmEnding = (str, target) => {
  let len = target.length;
  if (str.slice(-len) == target) {
    return true;
  } else {
    return false;
  }
};

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("best place", "place"));

//repeat the string for num of times
const repeatStringNumTimes = (str, num) => {
  let str1 = "";
  if (num < 1) {
    str = "";
  } else {
    for (let i = 0; i < num; i++) {
      str1 += str;
    }
    str = str1;
  }
  return str;
};

console.log(repeatStringNumTimes("abc", 3));

/**
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 */
const truncateString = (str, num) => {
  if (str.length == num || str.length < num) {
    return str;
  } else {
    var str1 = str.slice(0, num) + "...";
    str = str1;
    return str;
  }
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

/**
 * Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
 * This means that given an element x, the 'truth test' is passed if func(x) is true.
 * If no element passes the test, return undefined.
 */
const findElement = (arr, func) => {
  let count = 0,
    num;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (num == 1) {
      continue;
    } else if (func(num)) {
      count = 1;
      break;
    }
  }
  if (count == 1) {
    return num;
  } else {
    return "undefined";
  }
};

console.log(findElement([1, 5, 3, 9], (num) => num % 2 === 0));

/**
1   2     3    4   5
9   8     7    6
    10   11   12   13
17  16   15   14  
    18   19   20   21
25  24   23   22
    26   27   28   29
33  32   31   30
 find the postion of the number given
 example: input => 12
 output => position is 4

 input => 10   output => 2
*/

const position = (num) => {
  if (num > 5) {
    let num1 = num - 5;
    let num2 = num1 % 4;
    return 1 + num2;
  } else {
    return num;
  }
};

console.log(position(0));

/**
 * find the logest word in the sentence
 * I am Annijoice from Chennai
 * return Annijoice
 */
const longestWord = (sentence) => {
  let Array = sentence
    .split(" ")
    .sort((word1, word2) => word2.length - word1.length);
  return Array[0];
};

console.log(longestWord("I am Annijoice from chennai"));

/**
Input - "Anni"
Add the each strings ascii value and return the respected number
*/
const printval = (str) => {
  let asciiVal = 0;
  for (let i = 0; i < str.length; i++) {
    asciiVal = asciiVal + str.charCodeAt(i);
  }
  console.log(asciiVal);
};

printval("Anni");

/**
Right rotation
[abcdef] => [fabcde] => [efabcd] => [defabc] => [cdefab] => [bcdefa] => [abcdef]
*/
const rightshift = (str) => {
  len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    shift = str.slice(i) + str.slice(0, i);
    console.log(shift);
  }
};

rightshift("abcdef");

/**
 * print a pyramid
 */
const pyramid = (num) => {
  for (let i = 0; i < num; i++) {
    let print = "*";
    for (let j = 1; j <= i; j++) {
      print += "*";
    }
    console.log(print);
  }
};
pyramid(5);

/**
 * Given an array of integers, find the sum of its elements.
 * For example, if the array ar=[1,2,3],1+2+3=6 , so return 6.
 */
const simpleArraySum = (n, arr) => {
  return arr.reduce((acc, currentValue) => {
    return (acc += currentValue);
  });
};

console.log(simpleArraySum(4, [10, 20, 30, 40]));
