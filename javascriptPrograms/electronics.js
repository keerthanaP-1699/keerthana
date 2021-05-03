/**
 * A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.
 * Given price lists for keyboards and USB drives and a budget, find the cost to buy them.
 * If it is not possible to buy both items, return -1.b=60;keyboard=[40,50,60];drives=[5,8,12].
 * The person can buy a 40 keyboard+12 USB drive=52, or a 50keyboard + 8drives=58.
 *  Choose the latter as the more expensive option and return 58.
 */

const electronic = (price, keyboard, drive) => {
  let store = 0,max = -1;
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < drive.length; j++) {
      if (keyboard[i] + drive[j] <= price) {
        store = keyboard[i] + drive[j];
        max = store > max ? store : max;
      }
    }
  }
  return max;
};

console.log(electronic(70, [60, 30, 45, 55], [9, 8, 6]));
