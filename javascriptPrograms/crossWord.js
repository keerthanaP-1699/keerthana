/**
 * **Inputs:-**
 * letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY"
 * words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"]
 * 2D array:- (You should construct dynamically. Given below is for reference)
  [
  ["P", "S", "U", "W", "H", "A", "T", "S"],
  ["L", "P", "A", "C", "K", "A", "G", "E"],
  ["N", "Y", "O", "L", "R", "D", "V", "L"],
  ["F", "I", "N", "G", "E", "Z", "B", "M"],
  ["I", "R", "E", "H", "Q", "N", "J", "O"],
  ["A", "T", "B", "V", "G", "Y", "E", "S"],
  ["J", "D", "U", "W", "U", "E", "S", "T"],
  ["P", "S", "T", "I", "C", "K", "E", "Y"]
  ]

 ***Questions:-**
 * 1) How many words are present in the boxes.
 * 2) Which direction you can find a word
 * stick - Horizontal Direction
 * most - Vertical Direction
 */

let letters =
  "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY";
let words = [
  "stick",
  "most",
  "key",
  "vein",
  "yes",
  "package",
  "tube",
  "target",
  "elm",
  "spy",
];
letters = letters.toLowerCase();
let arr = [],
  arr2 = [],
  j = 0;
for (let i = 0; i < letters.length; i += 8) {
  arr[j] = letters.slice(i, i + 8);
  j++;
}
for (let i = 0; i < 8; i++) {
  for (var n = 0; n < 64; n += 8) {
    arr2[i] =
      letters[i] +
      letters[i + 8] +
      letters[i + 16] +
      letters[i + 24] +
      letters[i + 32] +
      letters[i + 40] +
      letters[i + 48] +
      letters[i + 56];
  }
}
for (let k = 0; k < 10; k++) {
  var len = words[k].length;
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
      arr1 = arr[j].slice(i, i + len);
      arr3 = arr2[j].slice(i, i + len);
      if (arr1 == words[k]) {
        console.log(arr1 + "-Horizontal direction");
      } else if (arr3 == words[k]) {
        console.log(arr3 + "-Vertical direction");
      }
    }
  }
}

//or

let letters =
  "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY";
let words = [
  "stick",
  "most",
  "key",
  "vein",
  "yes",
  "package",
  "tube",
  "target",
  "elm",
  "spy",
];
let depth = Math.sqrt(letters.length);
let puzzle = [];
let wordsCount = 0;
for (let x = 0; x < depth; x++) {
  let line = [];
  for (let y = x * depth; y < depth + x * depth; y++) {
    line.push(letters[y]);
  }
  puzzle.push(line);
}
words.forEach((word) => {
  for (let j = 0; j < depth; j++) {
    if (
      puzzle[j]
        .reduce((prevoius, current) => prevoius + current)
        .search(word.toUpperCase()) !== -1
    ) {
      console.log(word, "Horizontal");
      wordsCount++;
    } else if (
      puzzle[j]
        .reduce((prevoius, current) => current + prevoius)
        .search(word.toUpperCase()) !== -1
    ) {
      console.log(word, "Horizontal");
      wordsCount++;
    }
    let verSlot = "";
    for (let k = 0; k < depth; k++) {
      verSlot += puzzle[k][j];
    }
    if (verSlot.search(word.toUpperCase()) !== -1) {
      console.log(word, "vertical");
      wordsCount++;
    } else if (verSlot.search(word.toUpperCase()) !== -1) {
      console.log(word, "Vertical");
      wordsCount++;
    }
  }
});

console.log(wordsCount);
