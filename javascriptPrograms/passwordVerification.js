/**
 * check whether the password meets all the condition
 * -> atleast one uppercase and lowercase alphabet
 * -> atleast one number should be used
 * -> must have atleast one symbol
 */

const password = (n, str) => {
  let upCase = 0,
    lowCase = 0,
    num = 0,
    sym = 0,
    len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      upCase += 1;
    } else if (str[i] >= "a" && str[i] <= "z") {
      lowCase += 1;
    } else if (str[i] >= 0 && str[i] <= 9) {
      num += 1;
    } else {
      sym += 1;
    }
  }

  if (upCase >= 1 && lowCase >= 1 && sym >= 1 && num >= 1 && n <= len) {
    console.log("you have created a strong Password");
  } else if (n > len && (upCase < 1 || lowCase < 1 || sym < 1 || num < 1)) {
    console.log(
      "you required ",
      n -
        len +
        " more characters. you need to add atleast one of each character type."
    );
  } else if (n > len) {
    console.log("you required ", n - len + "more characters.");
  } else {
    console.log("you need to add atleast one of each character type.");
  }
};

password(5, "Abc@123");
password(9, "aabbcc");
password(6, "123@ac");
