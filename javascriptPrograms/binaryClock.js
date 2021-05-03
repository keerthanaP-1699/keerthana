/**
 * A binary clock displays the time of day in binary format. Modern binary clocks have six columns of lights; 
 * two for each of the hours, minutes and seconds. 
 * The photo below shows a binary clock displaying the time "12:15:45":
 * The binary values increase from the bottom to the top row. Lights on the bottom row have a value of 1, 
 * lights on the row above have a value of 2, then 4 on the row above that, and finally a value of 8 on the top row. 
 * Any 24-hour time can be shown by switching on a certain combination of lights. For example, to show the time "10:37:49":
 * You've decided to build your own binary clock, and you need to figure out how to light each row of the clock to show the correct time. 
 * Given the time as a string, return an array containing strings that shows the lights for each row of the clock (top to bottom). 
 * Use "1" for on, and "0" for off. Leave a blank space for any part of the row that doesn't require a light.
 * 
 * Input:-
 * binaryClock("10:37:49")
 * 
 * output:-

  [' 0 0 1',
   ' 00110',
   '001100',
   '101101']

 * binaryClock("18:57:31")
  [' 1 0 0',
   ' 01100',
   '000110',
   '101111']
*/

let time = "13:56:20",
  bin = [],
  time1 = [],
  j = 0,
  timer = [],
  final = [];
for (let i = 0; i < 8; i++) {
  if (time[i] != ":") {
    time1[j] = time[i].split("");
    j++;
  }
}
for (let i = 0; i < 6; i++) {
  bin[i] = parseInt(time1[i], 10).toString(2);
  timer[i] = bin[i].split("");
  final[i] = timer[i].reverse();
}
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 4; j++) {
    if (final[i][j] != 0 && final[i][j] != 1) {
      final[i][j] = "0";
    }
  }
}
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 6; j++) {
    process.stdout.write(final[j][i]);
  }
  console.log("");
}

//or

const binaryClock = (time) => {
  let binaryTime = [],
    length = [2, 4, 0, 3, 4, 0, 3, 4],
    result = [];
  time.split("").forEach((digit, index) => {
    if (digit != ":") {
      binaryTime.push((+digit).toString(2).padStart(length[index], 0));
    }
  });
  binaryTime = binaryTime.map((val) => val.padStart(4, " "));
  for (let i = 0; i < 4; i++) {
    result.push(binaryTime.map((val) => val[i]));
  }
  return result.map((row) =>
    row.reduce((prev, curr) => (curr != " " ? prev + curr : prev))
  );
};

console.log(binaryClock("18:57:31"));
