/**
 * DATA PROPERTIES
 * access data property
 */
var person = {
  name: "kee",
  age: 25,
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));

//add r remove any property
delete person.age;
console.log(person.age); //undefined

("use strict");

let persoon = {};
Object.defineProperty(persoon, "ssn", {
  //Object.defineProperty(objectname,"propertyname",descriptorObject)
  configurable: false,
  value: "012-38-9119",
});
Object.defineProperty(persoon, "ssn", {
  configurable: true,
});
delete person.ssn;

//to print all the values in object
let perrson = {};
perrson.age = 25;
perrson.ssn = "012-38-9119";
for (let prop in perrson) {
  console.log(prop); //age   ssn
}

//if any property dont print add enumerable
let personn = {};
personn.age = 25;
personn.ssn = "012-38-9119";
Object.defineProperty(personn, "age", {
  enumerable: false, // age value will not get peinted
});
for (let prop in personn) {
  console.log(prop); //ssn
}

//ACCESSOR PROPERTIES
let peerson = {
  firstName: "John",
  lastName: "Doe",
};
Object.defineProperty(peerson, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (value) {
    let parts = value.split(" ");
    if (parts.length == 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw "Invalid name format";
    }
  },
});
console.log(peerson.fullName);

//MULTIPLE PROPERTIES using Object.defineProperties
var product = {};
Object.defineProperties(product, {
  name: {
    value: "Smartphone",
  },
  price: {
    value: 799,
  },
  tax: {
    value: 0.1,
  },
  netPrice: {
    get: function () {
      return this.price * (1 + this.tax);
    },
  },
});
console.log(
  "The net price of a " +
    product.name +
    " is " +
    product.netPrice.toFixed(2) +
    " USD"
); //The net price of a Smartphone is 878.90 USD

//enumerable own properties from one or more sourse object to target object
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

//clone an object
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

//Properties on the prototype chain and non-enumerable properties cannot be copied
const objj = Object.create(
  { foo: 1 },
  {
    bar: {
      value: 2, // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true, // baz is an own enumerable property.
    },
  }
);

const copyy = Object.assign({}, objj);
console.log(copyy); // { baz: 3 }
