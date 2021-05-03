/** simple function */
const sum = (a, b) => {
  let c = a + b;
  console.log(c); //haikee
  a = a + b;
  c = "*" + a + "*";
  console.log(c, b); //*haikee*kee
  console.log(a + ":" + b); //haikee:kee
};

sum("hai", "kee");
// console.log(c); c can access only inside the function

//example
var name = "keekz";
function nAme() {
  let name = "keerthu";
  console.log(name); //keerthu
}

console.log(name); //keekz bcoz global value
nAme();
console.log(name); //keekz bcoz let will not change the value outside the scope

//example
function Choco(choco1) {
  choco1 = "*" + "dairymilk"; //the choco1 name doesnot changes outside variable
  console.log(choco1); //*dairymilk
}

let choco1 = "5star";
console.log(choco1); //5star
Choco(choco1);
console.log(choco1); //5star bcoz we send the arguments

//example
let choco2 = "5star";
function Chocoo() {
  //function overloading cannot do in js,so fn is changed to chocoo
  choco2 = "*" + "dairymilk"; //the choco2 name changes outside also
  console.log(choco2); //*dairymilk
}
console.log(choco2); //5star
Chocoo();
console.log(choco2); //*dairymilk bcoz arguments are not passed

//example
function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
  /**
   * as we declared txt="not txt given" the func takes the value
   * if  function show(from,text)
   * show("ann");
   * output will be ann: undefined
   */
}
showMessage("Ann");

//example
function show(k, t) {
  t =
    t ??
    "i'll replace"; /**nullish if the value is undefined then given value will get replaced*/
  console.log(k, t);
}
show("ke");
/** console.log(k,t); throw an error as k,t is used only inthe func */

//example
function sayHi() {
  console.log("Hello");
}
const func = sayHi;
func(); // Hello
sayHi(); //hello

var sayhi = function () {
  console.log("hai");
};
func1 = sayhi;
func1();
/**
 * hai   if console.log(func1()); it prints hai undefined
 * bcoz func1 runs a function that returns hai but func1 is not declared with any num r string;
 * * * * * * * *
 * callback function
 */

function claass(naame, seec, sec) {
  c = naame[0];
  if ("a" >= c && c <= "k") {
    seec();
  } else {
    sec();
  }
}

function sec1() {
  console.log("A");
}

function sec2() {
  console.log("B");
}

claass("keer", sec1, sec2);

/** arrow function */
let suum = ([a, b] = [10, 20]) => a + b;
console.log(suum());

let age = 10;
let welcome =
  age < 18 ? () => console.log("Hello") : () => console.log("Greetings!");
welcome();
