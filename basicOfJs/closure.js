//closures
function outer() {
  let b = 10;
  function inner() {
    let a = 20;
    console.log(a + b);
  }
  return inner;
}
var X = outer();
var Y = outer();
X();
X();
Y();

//example2
function outer1() {
  let x = 5;
  function inner1(x) {
    //if parameter x is not given it takes the outer x value
    console.log(x * 2);
  }
  return inner1;
}
var X1 = outer1();
X1();

//example3
function outer2() {
  let b = 10;
  function inner2() {
    let a = 20;
    console.log("a= " + a + " b= " + b);
    a++;
    b++;
  }
  return inner2;
}
var X = outer2(); // outer() invoked the first time
var Y = outer2(); // outer() invoked the second time
X(); // X() invoked the first time     a=20,b=10
X(); // X() invoked the second time    a=20,b=11
X(); // X() invoked the third time     a=20,b=12
Y(); //Y() invoked the first time       a=20,b=10

//example4
function sayHello() {
  var say = function () {
    console.log(hello);
  };
  // Local variable that ends up within the closure
  var hello = "Hello, world!";
  return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’

//example5
var x = 10;
function foo(a) {
  var b = 20;
  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }
  function boop(e) {
    return e * -1;
  }
  return bar;
}
var moar = foo(5); // Closure ,here a is assigned to  5
console.log(moar(15)); // 15 is assigned to c variable

//example6
var x1 = 10;
function foo() {
  var y = x1 + 5;
  console.log(y);
}
function bar() {
  var x1 = 2;
  return foo();
}
function main() {
  foo(); // Static scope: 15; Dynamic scope: 15
  bar(); // Static scope: 15; Dynamic scope: 7
}
main();

//example6
var myVar = 100;
function foo() {
  console.log(myVar);
}
foo(); // Static scope: 100; Dynamic scope: 100

//example7
(function () {
  var myVar = 50;
  foo(); // Static scope: 100; Dynamic scope: 50
})();

// Higher-order function
(function (arg) {
  var myVar = 1500;
  arg(); // Static scope: 100; Dynamic scope: 1500
})(foo);
