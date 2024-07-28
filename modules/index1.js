// index1.js

// creating and export modules
// task 1
export function sum(num1, num2) {
  const sumOfNumber = num1 + num2;
  console.log(sumOfNumber);
}

export const personData = {
  name: "krishna",
  age: 25,
  place: "noida",
};

personData;

//  named and default exports

// task3

export function multi(a, b) {
  const multi = a * b;
  console.log(multi);
}

export function subs(a, b) {
  const subs = a - b;
  console.log(subs);
}

// task4

const date = new Date();

export default date;

// import entire modules

//  using third party modules

//  lodash  npm package 
// Lodash
// A modern JavaScript utility library delivering modularity, performance & extras.



// lodash


// Import the Lodash library

// import lodash from "lodash";

// let array = [1, 2, 3, 4, 5, 6];
// const sum1 = lodash.sum(array);
// console.log(sum1);

// const evenNumbers = lodash.filter(array, (num) => num % 2 === 0);
// console.log(evenNumbers);

