//callback
var fs = require("fs");
console.log("program starts");

fs.readFile('./exp.js', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");

// a function that uses a callback named `cb` as a parameter
function getAsyncMessage(cb) {
    setTimeout(function () { cb("Hello World!") }, 1000);
}
console.log("Before getSyncMessage call");
// calling a function and sending in a callback function as an argument.
getAsyncMessage(function(message) {
    console.log(message);
});
console.log("After getSyncMessage call");


/*Avoiding callback hell
there are 4 solutions for callback hell
1)comments

Makes a burger
makeBurger contains four steps:
  1. Get beef
  2. Cook the beef
  3. Get buns for the burger
  4. Put the cooked beef between the buns
  5. Serve the burger (from the callback)
We use callbacks here because each step is asynchronous.
We have to wait for the helper to complete the one step
before we can start the next step
*/
const makeBurger = nextStep => {
    getBeef(function(beef) {
      cookBeef(beef, function(cookedBeef) {
        getBuns(function(buns) {
          putBeefBetweenBuns(buns, beef, function(burger) {
            nextStep(burger);
          });
        });
      });
    });
}
// Make and serve the burger
makeBurger(() => {
    serve(burger)
})

//2)split into small functions
const getBeef = nextStep => {
    const fridge = leftFright;
    const beef = getBeefFromFridge(fridge);
    nextStep(beef);
};
const cookBeef = (beef, nextStep) => {
    const workInProgress = putBeefinOven(beef);
    setTimeout(function() {
      nextStep(workInProgress);
    }, 1000 * 60 * 20);
};

//3)Promises
const makeBurger = () => {
    return getBeef()
      .then(cookBeef)
      .then(getBuns)
      .then(putBeefBetweenBuns);
};
// Make and serve burger
makeBurger().then(serve);

//4)asynchronous function
const makeBurger = async () => {
    const beef = await getBeef();
    const cookedBeef = await cookBeef(beef);
    const buns = await getBuns();
    const burger = await putBeefBetweenBuns(cookedBeef, buns);
    return burger;
};
// Make and serve burger
makeBurger().then(serve);


//Bluebird promises
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
fs.readFileAsync('someFile.txt', 'utf8')
  .then(fileContent=>fs.readFileAsync(fileContent))
  .then(doStuff)
  .catch(err => {
    console.log("Handle all errors in one place",err)
  });


var Prom = require('bluebird');
// The node.js Built in Promise constructor does not have promisify (4.3.2)
console.log(Promise.promisify); // undefined
// but bluebird does
console.log(Prom.promisify); // [Function]   
var getStats = Prom.promisify(require('fs').stat);
getStats('README.md').then(function (stats) {
    console.log('readme stats:');
    console.log(stats);
}).catch (function (err) {
    console.log('error getting readme stats');
    console.log(err);
});


//converting callback to promises
// Existing Callback 
var callback = function(err, success) { 
    if(err) { 
        console.log("keekz is very sad!"); 
    } 
    else { 
        console.log("keekz is optimistic, "
            + "thus becomes successful"); 
    } 
} 
var caller = function(status, callback){ 
    if(status === 'Happy') 
        callback(null, true); 
    else { 
        callback(new Error(), false); 
    }  
} 
// Calling the caller method   
// Executes the success part 
caller('Happy', callback); //kekz is optimistic,thus becomes successful
  
// Executes the error part 
caller('Sad', callback); //keekz is sad!



// implementation of callback into promises 
var error = function(){ 
    // The error codeblock from the existing callback. 
    console.log("keekz is very sad!"); 
} 
     
var success = function(){ 
    // The success codeblock from the existing callback 
    console.log("keekz is optimistic, " + "thus becomes successful"); 
} 
     
var caller = function(status) { 
    return new Promise(function(resolve, reject) { 
        if(status === 'Happy') { 
              
            // Calling the resolve function  
            // when function returns success 
          resolve(); 
        } 
        else { 
           
            // Calling the reject function 
            // when function returns failure 
            reject(); 
        } 
    }); 
};   
// Throw success 
caller('Happy').then(success).catch(error);//keekz is optimistic, thus becomes successful   
// Throw error 
caller('Sad').then(success).catch(error); //keekz is very sad




//callback
function getUserCallback(id, callback) {
    setTimeout(function () {
      callback(null, {
        id,
        name: 'Gabriel Rufino'
      })
    }, 2000)
}
getUserCallback(1234, function (error, user) {
    if (!error) {
      console.log(user) // id:1234,name: 'Gabriel rufino'
    }
});


//promise
function getUserPromise(id) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({
          id,
          name: 'Gabriel Rufino'
        })
      }, 2000)
    })
}
getUserPromise(1234)
    .then(function (user) {
      console.log(user)// id:1234,name:'Gabriel rufino'
    })
    .catch(function (error) {
      console.error(error)
    });  


//callback
const fs = require('fs');

const readFileAsArray = (fileName, cb) => {
  if(typeof fileName !== 'string') {
    return process.nextTick(
      cb,
      new TypeError('Argument should be string')
    );
  }
  fs.readFile(fileName, 'utf8', (error, data) => {
    if(error) {
      return cb(error)
    } 
    const lines = data.trim().split('\n')
    cb(null, lines)
  })
};

const printEvenNumber = (error, data) => {
  if(error) throw error;
  const evenNumbers = data.filter(num => num % 2 === 0);
  console.log('Even Numbers : ', evenNumbers)//["102","104","106"]
}
readFileAsArray('./num.txt', printEvenNumber)


//promises
const fs = require('fs');

const readFileAsArray = (fileName) => {
  return new Promise((resolve, reject) => {
    if(typeof fileName !== 'string') {
      return reject('Argument should be string')
    }

    fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) {
        return reject(err)
      }
      const lines = data.trim().split('\n');
      resolve(lines)
    })
  })
}

readFileAsArray('./num.txt').then(data => {
  const evenNumbers = data.filter(num => num % 2 === 0)
  console.log('Even Numbers : ', evenNumbers)//["102","104","106"]
}).catch(err => {
  console.log(err)
})

//converting promise into async await
//promise
fetchData()
    .then(process())
    .then(processAgain());

//async/await
const response1 = await fetchData();
const response2 = await process(response1);
const response = await processAgain(response2);
response();

//promise
function example(){
    return Promise.resolve(1)
        .then(() => {
            return Promise.resolve(2);
        }).then((value) => {
            console.log(value)
            return Promise.reject(3)
        }).catch(err => {
            console.log(err);
        })
}
function get(){
    return fetch('/exp')
        .then(res => res.text())
        .catch(err => console.log('Error',err))
}
example();
get();


//async/await
async function example(){
    try{
        await Promise.resolve(1);
        const value = await Promise.resolve(2);
        console.log(value);
        return Promise.reject(3);
    }
    catch (err){
        console.log(err);
    }
}
async function get() {
    try{
        const res = await fetch('./exp');
        return res.text();
    }
    catch (err) {
        return console.log('Error',err);
    }
}
example();
get();

//promises
function test(){
    return new Promise((resolve,reject) => {
    resolve('successful');
       });
}
let a = test();
a.then(resolved => console.log(resolved));

//async/await
async function main() {
    let a = await test();
    console.log(a);
}
function test(){
    return 'successful';
}
main();


//promises
function restaurantCustomer() {
    return getCustomer()
    .then(customer => {
        return getOrder(customer);
    }).then(order => {
        return prepareFood(order);
    }).then(meal => {
        return serveFood(meal);
    }).then(food => {
        return eatFood(food, customer);
    }).catch(showError);    
}
restaurantCustomer();

//async/await
function restaurantCustomer() {
    let customer = await getCustomer();
    let order = await getOrder(customer);
    let meal = await prepareFood(order);
    let food = await serveFood(meal);
    return await eatFood(food);
}
