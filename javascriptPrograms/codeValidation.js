/**
 * Consider the card with 16 digit number
 * Multiple 2 for all odd position number ( if exist more than 9 than add the digits )
 * Add all the digits and divide by 10 if reminder is 0 then card valid else not
 */

const checkNum = (num) => {
  let myArr = [];
  myArr = String(num).split("");
  for (let i = 0; i < 16; i++) {
    if (i == 0 || i % 2 == 0) {
      let number = myArr[i] * 2;
      if (number > 9) {
        let rem = number % 10;
        myArr[i] = Math.floor(rem + number / 10);
      } else {
        myArr[i] = number;
      }
    } else {
      myArr[i] = Number(myArr[i]);
    }
  }

  const finalVal = myArr.reduce((prev, curr) => {
    return prev + curr;
  });

  if (finalVal % 10 == 0) {
    console.log("card is valid");
  } else {
    console.log("card is not valid");
  }
};

checkNum(1234567890123456);
checkNum(1234567890123452);
