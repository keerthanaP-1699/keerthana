/**
 * you bought a few bunches of fruit over the weekeend.
 * create a function that splits a bunch into singular objects inside an array.
 * example:
 * input => splitBunch([{name:"grapes",quantity:1},{name:"banana",quantity:2}])
 * output=>
 * [{name:"grapes",quantity:1},{name:"banana",quantity:1},{name:"banana",quantity:1}]
 */

const splitObj = (arrobj) => {
  let array = [],
    k = 0;
  for (let i = 0; i < arrobj.length; i++) {
    for (let j = 0; j < arrobj[i].quantity; j++) {
      array[k] = { name: arrobj[i].name, quantity: 1 };
      k++;
    }
  }
  return array;
};

console.log(
  splitObj([
    { name: "banana", quantity: 5 },
    { name: "grapes", quantity: 2 },
  ])
);
