/**
 * In Clockwise Cipher, encoding is done by placing message characters in the corner cells of a square and moving in a clockwise direction.
 * Create a function that takes an argument message, and returns the encoded message.
 * There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
 * message = "Mubashir Hassan"
 * clockwiseCipher(message) ➞ "Ms ussahr nHaaib"
 * Step 1: Form a square large enough to fit all the message characters. Given message can fit in a 4 x 4 square.
 * Step 2: Starting with the top-left corner, place message characters in the corner cells moving in a clockwise direction. After the first cycle is complete, continue placing characters in the cells following the last one in its respective row/column. When the outer cells are filled, continue for the remaining inner squares:
    M s u
    s s a h
    r n H
    a a i b
 * Step 3: Return encoded message Rows-wise:
 * eMessage = "Ms ussahr nHaaib"
 * Example for a 5 x 5 Square
  [ 1 5 9 13 2]
  [16 17 21 18 6]
  [12 24 25 22 10]
  [ 8 20 23 19 14]
  [ 4 15 11 7 3]
 * Examples
 * clockwiseCipher("Mubashir Hassan") ➞ "Ms ussahr nHaaib"
 * clockwiseCipher("Matt MacPherson") ➞ "M ParsoMc nhteat"
 * clockwiseCipher("Edabit is amazing") ➞ "Eisadng tm i zbia a"
 * Notes
 * Fill up any unused cells with a space character.
 * Message can contain spaces and special characters.
*/

const enCoding = (senti) => {
  senti = [...senti];
  const len = senti.length;
  const arrsize = Math.ceil(Math.sqrt(len));
  let array = Array.from({ length: arrsize }, (_) =>
    new Array(arrsize).fill(" ")
  );

  let i = 0;
  let cval = 4 * (arrsize - 2 * i - 1);
  while (cval > 0) {
    for (let j = 0; j < cval && senti.length; j++) {
      let a = j % 4,
        x,
        y;
      switch (a) {
        case 0:
          [x, y] = [i, j / 4 + i];
          break;
        case 1:
          [x, y] = [(j - 1) / 4 + i, arrsize - 1 - i];
          break;
        case 2:
          [x, y] = [arrsize - 1 - i, arrsize - 1 - ((j - 2) / 4 + i)];
          break;
        case 3:
          [x, y] = [arrsize - 1 - (j - 3) / 4 + i, i];
          break;
      }
      array[x][y] = senti.shift();
    }
    i++;
    cval = 4 * (arrsize - 2 * i - 1) || 1;
  }
  console.log(array.flat().join(""));
};

enCoding("Mubashir Hassan");
enCoding("Matt MacPherson");
enCoding("edabit is amazing");
