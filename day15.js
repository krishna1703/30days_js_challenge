//  closures

// What is a Closure?
// A closure is created when a function is defined within another function,
//  allowing the inner function to capture and remember the environment (variables and parameters)
//   of the outer function. This inner function retains access to the outer function's scope even after the
//    outer function has finished executing.

// task 1

function outer() {
  let persone = "krishna";
  function inner() {
    console.log(`inner  function : ${persone}`);
  }
  inner();
}
outer();

function outerFunction(outerVariable) {
  // The inner function accesses the outerVariable from the outerFunction's scope
  return function innerFunction() {
    return outerVariable;
  };
}

// Create an instance of the inner function
const myInnerFunction = outerFunction("Hello, World!");

// Call the inner function and log the result
console.log(myInnerFunction()); // Output: Hello, World!

//   task2

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}
const myCounter = createCounter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();

console.log(myCounter.getValue());

// practical closures

function uniqueId() {
  let LastId = 0;

  return function () {
    LastId++;

    return `Id : ${LastId}`;
  };
}

const generateId = uniqueId();
console.log(generateId());

function capture() {
  let username = "krishna";
  return function () {
    console.log(`username is : ${username}`);
  };
}

const userName = capture();
userName();

//  CLOSURES in loops

let functionArray = [];

for (let i = 0; i <= 5; i++) {
  functionArray[i] = function () {
    console.log("i :", i);
  };
}

functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();
functionArray[5]();

//  module pattern

function itemsManager() {
  let items = [];

  return {
    additem: function (item) {
      items.push(item);
    },

    removeitem: function (item) {
      items = items.filter((product) => product !== item);
    },

    Listitem: function () {
      return items.slice();
    },
  };
}

const manage = itemsManager();

manage.additem("apple");
manage.additem("banana");
manage.additem("lichi");
manage.additem("orange");

console.log(manage.Listitem());
manage.removeitem("apple");
manage.Listitem();
console.log(manage.Listitem());

console.log(manage.Listitem());
//  The itemsManager function creates a private array called items and returns an object with methods to manipulate this array. This is an example of using closures to encapsulate data and provide controlled access to it.



// memoization 


// Closures and memoization are powerful concepts in JavaScript that often go hand in hand. Let's delve into each concept and then see how they can be combined for efficient coding.

// Closures
// As we discussed earlier, a closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This allows the function to remember and access variables from the outer function.

// Memoization
// Memoization is an optimization technique used to speed up function execution by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This reduces the need for repeated calculations for the same inputs, improving performance, especially for functions with heavy computation.

// Combining Closures and Memoization
// We can use closures to implement memoization by creating a function that maintains a cache of results. The cache will store the results of function calls, and the memoized function will first check the cache before performing any calculations.


function memoizeFactorial(fn) {
    const cache = {};

    return function(n) {
        if (cache[n] !== undefined) {
            console.log('Fetching from cache:', n);
            return cache[n];
        }

        console.log('Calculating result for:', n);
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoizeFactorial(factorial);

console.log(memoizedFactorial(5)); // Calculating result for: 5
console.log(memoizedFactorial(6)); // Calculating result for: 6
console.log(memoizedFactorial(5)); // Fetching from cache: 5
