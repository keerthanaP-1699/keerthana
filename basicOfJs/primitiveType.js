var a = 25; //let a=25;             var a=25;          let a=25
var b = a; //var b=a;              let b=a;           let b=a
a = 33; //b=33;
console.log(a, b); //console.log(a,b)     output:25  33

// if var a=10,b=4; then prints a,b value
function aa() {
  var ab = 25;
  var bc = ab; //b has separate memory space
  bc = 33;
}

console.log(ab, bc); // error a,b is inside the scope

var x = { name: "kee" };
var y = x;
y.name = "keerthu"; //here the value inside the object gets changed
console.log(x.name, y.name);

//passing argument by value
function square(x) {
  x = x * x;
  return x;
}

var x = 10;
var result = square(x);
console.log(x);
console.log(result);

//passing argument by object
function student(x) {
  x.naame = "kee";
}

var stu = { naame: "keekz" };
student(stu);
console.log(stu.naame);

//determining type we use typeof operator
var a = 5,
  b = "5",
  c = null,
  d = true,
  e;
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof Math.max,
  typeof { nam: "fsh" }
);

//scope of variables
var frnd = "jave"; //global variable
function school() {
  var sfrnd = "rebi";
  console.log(frnd, sfrnd);
  /** if we try to print cfrnd it will not print
   *  bcoz of function var
   */
  college();

  function college() {
    var cfrnd = "kirthi";
    console.log(frnd, sfrnd, cfrnd);
  }
}

console.log(frnd);
/** console.log(sfrnd,cfrnd);
 * they are not defined bcoz they are local variables
 */

school();

//block scope
function likes() {
  if (true) {
    var like1 = "dress"; ////var has no a block level scope
    const like2 = "earring";
    let like3 = "bag";
  }
  console.log(like1);
  /**console.log(like2,like3);
   * as they are declared with const and let it is block scope
   * if wetry to print it shows error:not defined
   */
}

likes();
