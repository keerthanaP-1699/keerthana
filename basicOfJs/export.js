//exporting literals
module.exports = 12345;

//exporting function
const getName = () => {
  return "kee";
};
const getLocation = () => {
  return "Coimbatore";
};
const dateOfBirth = "16.11.1999";
exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;

//variation in syntax
exports.getUsername = () => {
  return "kee";
};
exports.Dob = "16.11.1999";

//Exporting default values
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getUserStats() {
    return `
        Name: ${this.name} 
        Age: ${this.age} 
        Email: ${this.email} `;
  }
}
module.exports = User;

//exporting object
module.exports = {
  hello: function (subject) {
    console.log("Jupiter says hello " + subject);
  },

  bye: function (subject) {
    console.log("Jupiter says goodbye " + subject);
  },
};

//every module injected only once
console.log(123);
exports.var1 = 4;

//exporting function as class
module.exports = function () {
  this.name = "keekz";
  this.website = "https://keekz.com";
  this.info = () => {
    console.log(`Company name - ${this.name}`);
    console.log(`Website - ${this.website}`);
  };
};

//export array
exports.animals = ["dog", "sheep", "cow", "horse"];
