/**
 * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 * Examples
 * numToEng(0) ➞ "zero"
 * numToEng(18) ➞ "eighteen"
 * numToEng(126) ➞ "one hundred twenty six"
 * numToEng(909) ➞ "nine hundred nine"
 * Notes
 * There are no hyphens used (e.g. "thirty five" not "thirty-five").
 * The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
 */

let numberToAmount = (num) => {
  units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num == 0) {
    console.log("zero");
  } else if (num <= 19) {
    console.log(units[num]);
  } else if (num > 19 && num < 99) {
    console.log(tens[Math.floor(num / 10)] + " " + units[num % 10]);
  } else if (num > 99 && num < 999) {
    console.log(
      units[Math.floor(num / 100)] +
        " hunderd " +
        tens[Math.floor((num / 10) % 10)] +
        " " +
        units[Math.floor(num % 10)]
    );
  } else {
    console.log("enter number between 0 and 999");
  }
};

numberToAmount(1000);
numberToAmount(123);
numberToAmount(23);
numberToAmount(2);
numberToAmount(0);
