//checking password
function secretPassword() {
  var password = "xh38sk";
  return {
    guessPassword: function (guess) {
      if (guess === password) {
        console.log("true");
      } else {
        console.log("false");
      }
    },
  };
}
var passwordGame = secretPassword();
passwordGame.guessPassword("heyisthisit?"); // false
passwordGame.guessPassword("xh38sk"); // true

//using outer variable in inner function
function buildName(name) {
  var greeting = "Hello, " + name + "!";
  var sayName = function () {
    var welcome = greeting + " Welcome!";
    console.log(greeting);
    console.log(welcome);
  };
  return sayName;
}
var sayMyName = buildName("John");
sayMyName(); // Hello, John. Welcome!

//changing the value
function initializeData() {
  var myVar = 1;
  return {
    getVar: function () {
      return myVar;
    },
    setVar: function (v) {
      myVar = v;
    },
  };
}
obj = initializeData();
console.log(obj.getVar()); // 1
obj.setVar(2);
console.log(obj.getVar()); // 2
obj.setVar("string");
console.log(obj.getVar()); // string

//closure increment
var singleton = (function () {
  var private_contor = 0;
  return {
    get: function () {
      return "Contor: " + private_contor;
    },
    increment: function () {
      private_contor++;
    },
  };
})(); //singleton is the result of this function's call
console.log(singleton.get());
singleton.increment();
console.log(singleton.get());
singleton.increment();
console.log(singleton.get());

//createList
function createList(name, job) {
  // "Private" variables here
  let _name = name;
  let _job = job;
  // Public variables here
  return {
    // Getter Methods
    getName() {
      return _name;
    },
    getJob() {
      return _job;
    },
    // Setter Methods
    setName(newName) {
      _name = newName;
    },
    setJob(newJob) {
      _job = newJob;
    },
  };
}
const presto = createList("Presto", "Digger");
const fluffykins = createList("Fluffykins", "Jumper");
// Getter methods have access to the closure
console.log(presto.getName()); // 'Presto'
console.log(presto.getJob()); // 'Digger'
console.log(fluffykins.getName()); // 'Fluffykins'
console.log(fluffykins.getJob()); // 'Jumper'

// Setter methods can mutate the variables in the closure
presto.setName("Quick");
presto.setJob("Bone Finder");
fluffykins.setName("Mittens");
fluffykins.setJob("Fish Eater");

console.log(presto.getName()); // 'Quick'
console.log(presto.getJob()); // 'Bone Finder'
console.log(fluffykins.getName()); // 'Mittens'
console.log(fluffykins.getJob()); // 'Fish Eater'

//private instance method
class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());

//module pattern
var collection = (function () {
  var name, age, salary;
  function ini(Name, Age) {
    name = Name;
    age = Age;
    salary = age * 50;
  }
  function display() {
    console.log(name + "  " + age + "  " + salary);
  }
  return ini("kee", 45), display();
})();
