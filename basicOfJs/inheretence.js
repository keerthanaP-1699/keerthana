function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

const leo = new Animal("Leo", 7);
leo.eat();
leo.play();
leo.sleep();
console.log(leo.this.energy);

/** SuperType constructor function */
function SuperType(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.friends = ["Ashwin", "Jadeja"]);
}

/** SuperType prototype */
SuperType.prototype.getSuperName = function () {
  return this.firstName + " " + this.lastName;
};

/** SubType prototype function */
function SubType(firstName, lastName, age) {
  //Inherit instance properties
  SuperType.call(this, firstName, lastName);
  this.age = age;
}

/** Inherit methods and shared properties */
SubType.prototype = new SuperType();
/** Add new property to SubType prototype */
SubType.prototype.getSubAge = function () {
  return this.age;
};

/** Create SubType objects */
var subTypeObj1 = new SubType("Virat", "Kohli", 26);
var subTypeObj2 = new SubType("Sachin", "Tendulkar", 39);

/** Modify the friends property using the subTypeObj1 */
subTypeObj1.friends.push("Amit");
console.log(subTypeObj1.friends); //["Ahswin", "Jadega", "Amit"]
console.log(subTypeObj2.friends); //["Ashwin", "Jadega"]

/** subTypeObj1 */
console.log(subTypeObj1.firstName); //Output: Virat
console.log(subTypeObj1.age); //Output: 26
console.log(subTypeObj1.getSuperName()); //Output: Virat Kohli
console.log(subTypeObj1.getSubAge()); //Output: 26

/** subTypeObj2 */
console.log(subTypeObj2.firstName); //Output: Sachin
console.log(subTypeObj2.age); //Output: 39
console.log(subTypeObj2.getSuperName()); //Output: Sachin Tendulkar
console.log(subTypeObj2.getSubAge()); //Output: 39

/** inherit behaviour from supertype */
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
duck.eat(); //nom nom nom
beagle.eat(); //nom nom nom

/** Reset an Inherited Constructor Property */
function Animal() {}

function Bird() {
  this.name = "kee";
}

function Dog() {
  this.name = "keerthu";
}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor());
console.log(beagle.constructor);

/** add methods after inheritance */
function Animal() {}

Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("Woof!");
};

Dog.prototype.constructor = Dog;
let beagle = new Dog();
beagle.eat(); //nom nom nom
beagle.bark(); //woof!

/** Override Inherited Methods */
function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly()); //im flying

/** Use a Mixin to Add Common Behavior Between Unrelated Objects */
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("djkds");
  };
};

glideMixin(bird);
glideMixin(boat);
bird.glide(); //djkds
boat.glide(); //djkds

/** IIFE to Create a Module */
let duck = {
  name: "Warrior",
  legs: 2,
};

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

funModule.isCuteMixin(duck);
funModule.singMixin(duck);
console.log(duck.isCute()); //true
duck.sing(); //singing to an awesome tune
