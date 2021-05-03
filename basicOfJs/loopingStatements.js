/** looping statements */
var a = 215,
  b = 320,
  gcd;
while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
gcd = a;
console.log(gcd);

/** else if */
function sign(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
  } else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is +");
  } else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
  } else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
  } else {
    console.log("The sign is -");
  }
}

sign(3, -8, 5);

/** for loop */
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
for (const value in iterable) {
  console.log(value);
}

for (let value of iterable) {
  value += 1;
  console.log(value);
}

/** break,label,continue */
let str = "*";

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}
console.log(str);
