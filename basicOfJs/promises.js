const myPromise = new Promise((resolve, reject) => {
  let condition = 0;

  if (condition) {
    resolve(console.log("resolved"));
  } else {
    reject(console.log("Promise is rejected"));
  }
});

//using .then() in promises
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});
// resolve runs the first function in .then
promise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Whoops!!"), 1000);
});
// reject runs the second function in .then
promise.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error) // shows error:"whoops!" after 1 second
);

//high num
function highest(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 > num2) return setTimeout(resolve, num1);
    setTimeout(reject, num2);
  });
}

highest(1000, 2000)
  .then(() => console.log("resolve"))
  .catch(() => console.log("reject"));

highest(3000, 2000)
  .then(() => console.log("resolve"))
  .catch(() => console.log("reject"));

highest(1000, 2000)
  .then(() => {
    console.log("resolve");
    return highest(1000, 2000);
  })
  .then(() => {
    console.log("resolve");
    return highest(1000, 2000);
  })
  .then(() => {
    console.log("resolve");
    return highest(1000, 2000);
  })
  .catch(() => console.log("reject"));

//compare in promise
var promise = new Promise(function (resolve, reject) {
  const x = "keekz";
  const y = "keekz";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a KEEKZ");
  })
  .catch(function () {
    console.log("Some error has occured");
  });

//promise resolved
var promise = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

promise.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

//promise rejected
var promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise.then(
  function (successMessage) {
    console.log(successMessage);
  },
  function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  }
);

//promise rejected using .catch()
var promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected"); //also we can write reject as -- throw new Error('Promise rejected')
});

promise
  .then(function (successMessage) {
    console.log(successMessage);
  })
  .catch(function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  });

//asynchronous function
let hello = async () => {
  return "hello";
};
/**
 * also create as async function hello() { return "Hello" };
 * let hello = async function() { return "Hello" };
 */
hello().then(console.log);
/**
 * also written as
 * hello().then((value) => console.log(value))
 */

//await keyword
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

f();

const getData = async () => {
  var y = await "Hello World";
  console.log(y);
};
console.log(1);
getData();
console.log(2); //1   2   hello world

// function using callback
function callbackFunc(callback) {
  callback("hello");
}

// callback function converted into promise function
promiseFunc = promisify(callbackFunc);
