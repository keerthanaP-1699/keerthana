// object
let person = {
  first_name: "keerthana",
  last_name: "padmanaban",
};
console.log(person.last_name);

let student = {
  name: "keerthana",
  age: 21,
  getval: function () {
    console.log("I'm " + student.name + "and my age is " + student.age);
  },
};
student.getval();

let studen = {
  name: "keerthu",
  age: 21,
  phone_num: {
    mob: 1234567890,
    landline: 245678,
  },
};
console.log(studen.phone_num.landline);

//Object.create()
let stu = {
  name: "kee",
  getvaal: function () {
    console.log(this.name + "age=" + this.age);
  },
};
let stu1 = Object.create(stu);
stu1.name = "keerthu";
console.log(stu.name);
stu1.age = 15;
stu1.getvaal();

/**Using an Object Constructor:
 * using a constructor
 */
function persoon(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

//creating new instances of person object
let persoon1 = new persoon("Mukul", "Latiyan");
let persoon2 = new persoon("Rahul", "Avasthi");
console.log(persoon1.first_name);
console.log(`${persoon2.first_name} ${persoon2.last_name}`);

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    console.log("This dog has " + this.numLegs + " legs.");
  },
};
dog.sayLegs();

//constructor
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
console.log(blueBird.name);
blueBird.name = "kee";
console.log(blueBird.name);

//Use Prototype Properties to Reduce Duplicate Code
Bird.prototype.numLegs = 2; //Now all instances of Bird have the numLegs property.
console.log(blueBird.numLegs); // prints 2

//constructor with receiving arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("jack", "black");
console.log(terrier.name);

//verify object's constructor with instanceof
let Biird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};
let crow = new Biird("Alexis", "black");
console.log(crow instanceof Biird); //true

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2,
};
console.log(canary instanceof Biird); // => false

//own properties
function Birrd(name) {
  this.name = name;
  this.numLegs = 2;
}

let canaary = new Birrd("Tweety");
let ownProps = [];
for (let property in canaary) {
  if (canaary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);

//two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
function Dog(name) {
  this.name = name; //own property
}

Dog.prototype.numLegs = 4; //prototype property
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); //['name']
console.log(prototypeProps); //['numLegs']

//constructor property
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity((this.name = "kee")));
let beagle = new Dog();
console.log(beagle.constructor === Dog); //true

//Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let dog = new Dog("jack");
console.log("numlegs:" + ddog.numLegs);
dog.eat();
dog.describe();

/**  Object’s Prototype Comes From */
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle));
/**
 * beagle inherits its prototype from the Dog constructor function.
 * You can show this relationship with the isPrototypeOf method
 */

console.log(Object.prototype.isPrototypeOf(Dog.prototype)); //prototype chain
