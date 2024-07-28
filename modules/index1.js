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



// axios for api call 


// module bundling  webpack install get use lodash and axois libaray 