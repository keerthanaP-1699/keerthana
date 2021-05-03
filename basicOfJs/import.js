//importing literals
const exp = require("./export");
console.log(exp); // 123445

//importing function
const exp = require("./export");
console.log("user name:" + exp.getName()); //user name: kee

//multiple methods and values
console.log(
  "user name:" +
    exp.getName() +
    " lives in " +
    exp.getLocation() +
    " and was born on " +
    exp.dob
);
//user name: kee lives in coimbatore and was born on 16.11.1999

//variation in syntax
const { getUsername, Dob } = require("./export");
console.log(getUsername() + " was born on " + Dob); //kee was born on 16.11.1999

//importing default values
const User = require("./export");
const kee = new User("keerthu", 21, "kee123@example.com");
console.log(kee.getUserStats()); // Name: keerthu  age: 21   email: kee123@example.com

//importing object
const User = require("./export");
User.hello("hello"); //Jupiter says hello hello
User.bye("bye"); // Jupiter says bye bye

//every module injected only once
var a = require("./export"); // Output 123
var b = require("./export"); // No output
console.log(a.var1); // Output 4
console.log(b.var1); // Output 4
a.var2 = 5;
console.log(b.var2); // Output 5

//importing function as class
const Company = require("./export");
const firstCompany = new Company();
firstCompany.info();

/*
there are 3 types of Modules in node.js
1) Importing from local module: These modules are created
by the user and can be imported as:
*/
const Var = require("./filename.js"); // OR
const Var = require("./path/filename.js");

/*
2) Importing from core modules: These modules are inbuilt 
in Node.js and can be imported as:
*/

const Var = require("fs");

/*
3) Importing from third party modules: These modules are
installed using a package manager such as npm. Examples 
of third party modules are express, mongoose, nodemon, etc. These are imported as:
*/

const express = require("express");

//import array
const myAnimalExports = require("./export");
console.log(myAnimalExports.animals); //['dog',;sheep','cow','horse']

//EventEitters
const events = require("events");
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
  console.log("listner1 executed.");
};

// listener #2
var listner2 = function listner2() {
  console.log("listner2 executed.");
};

// Bind the connection event with the listner1 function
eventEmitter.addListener("connection", listner1);

// Bind the connection event with the listner2 function
eventEmitter.on("connection", listner2);

var eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
eventEmitter.emit("connection");

// Remove the binding of listner1 function
eventEmitter.removeListener("connection", listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

//create listener
const events = require("events");
var myemitter = new events.EventEmitter();

myemitter.addListener("meeting", function listener1() {
  console.log("listener1 is listening");
});
myemitter.on("meeting", function listener2() {
  console.log("listener2 is listening");
});
myemitter.on("meeting", function listener3() {
  console.log("listener3 is listening");
});
myemitter.on("meeting", function listener4() {
  console.log("listener4 is listening");
});
myemitter.on("meeting", function listener5() {
  console.log("listener5 is listening");
});

myemitter.emit("meeting");
console.log(myemitter.listenerCount("meeting"));

//diff between on and once
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("myEvent", (data) => {
  console.log(data, "- ON");
});

eventEmitter.once("myEvent", (data) => {
  console.log(data, "- ONCE");
});

eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");

//remove eventsand display event names
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

var func1 = function func1() {
  console.log("EVENT TRIGGERED");
};
var func2 = function func2() {
  console.log("EVENT TRIGGERED");
};
eventEmitter.on("myEvent", func1);
eventEmitter.on("myEvent2", func2);

console.log(eventEmitter.eventNames());
eventEmitter.emit("myEvent");
eventEmitter.removeListener("myEvent", func1);
console.log(eventEmitter.eventNames());

//Exception handling in synchronous code
// Define divider as a syncrhonous function
var divideSync = function (x, y) {
  if (y === 0) {
    // "throw" the error safely by returning it
    return new Error("Can't divide by zero");
  } else {
    // no error occurred, continue on
    return x / y;
  }
};

var result = divideSync(9, 3);

if (result instanceof Error) {
  // handle the error safely
  console.log("9/3=err", result);
} else {
  console.log("9/3=" + result);
}

result = divideSync(9, 0);
if (result instanceof Error) {
  // handle the error safely
  console.log("9/0=err", result);
} else {
  console.log("9/0=" + result);
}

//Exception handling in callback-based( asynchronous) code:
var divide = function (x, y, next) {
  // if error condition?
  if (y === 0) {
    // "throw" the error safely by calling the completion callback
    // with the first argument being the error
    next(new Error("Can't divide by zero"));
  } else {
    next(null, x / y);
  }
};

divide(9, 3, function (err, result) {
  if (err) {
    // handle the error safely
    console.log("9/3=err", err);
  } else {
    console.log("9/3=" + result);
  }
});

divide(9, 0, function (err, result) {
  if (err) {
    // handle the error safely
    console.log("9/0=err", err);
  } else {
    console.log("9/0=" + result);
  }
});

//Exception handling in eventful code
// Definite our Divider Event Emitter
var events = require("events");
var Divider = function () {
  events.EventEmitter.call(this);
};
require("util").inherits(Divider, events.EventEmitter);

// Add the divide function
Divider.prototype.divide = function (x, y) {
  // if error condition?
  if (y === 0) {
    // "throw" the error safely by emitting it
    var err = new Error("Can't divide by zero");
    this.emit("error", err);
  } else {
    // no error occurred, continue on
    this.emit("divided", x, y, x / y);
  }
  // Chain
  return this;
};

// Create our divider and listen for errors
var divider = new Divider();
divider.on("error", function (err) {
  // handle the error safely
  console.log(err);
});
divider.on("divided", function (x, y, result) {
  console.log(x + "/" + y + "=" + result);
});
divider.divide(9, 3).divide(9, 0);

//error object
function doAthing() {
  byDoingSomethingElse();
}

function byDoingSomethingElse() {
  throw new Error("Uh oh!");
}

function init() {
  try {
    doAthing();
  } catch (e) {
    console.log(e);
    // [Error: Uh oh!]
  }
}
init();

//EventLoop
// Import events module
var events = require("events");
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
  console.log("connection succesful.");
  // Fire the data_received event
  eventEmitter.emit("data_received");
};

// Bind the connection event with the handler
eventEmitter.on("connection", connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on("data_received", function () {
  console.log("data received succesfully.");
});

// Fire the connection event
eventEmitter.emit("connection");
console.log("Program Ended.");
