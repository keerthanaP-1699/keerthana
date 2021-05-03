/**
 * recursion
 * sum of numbers
 */
function sum(x) {
  if (x > 0) {
    return x + sum(x - 1);
  } else {
    return x;
  }
}

console.log(sum(8));

//nested function
function A(a) {
  function B(b) {
    function C(c) {
      console.log(a + b + c);
    }

    C(5);
  }

  B(7);
}

A(10);

function outer() {
  let x = 5;
  function inner(x) {
    return x * 2;
  }

  return inner;
}

console.log(outer()());
console.log(outer()(10));

function outside(x) {
  function inside(y) {
    console.log(x + y);
  }

  return inside;
}

fn_inside = outside(3);
result = fn_inside(5);
result1 = outside(3)(5);

function add(a, b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}

console.log(add(10, 5));

//factorial
function fact(x) {
  if (x >= 1) {
    return x * fact(x - 1);
  } else {
    return 1;
  }
}

console.log(fact(5));

function f(i) {
  if (i > 0) {
    f(--i);
    console.log(i);
    f(--i);
  }
}
f(3);

function fo(i) {
  if (i < 0) return;
  console.log("strat:" + i);
  fo(i - 1);
  console.log("end:" + i);
}
fo(3);
