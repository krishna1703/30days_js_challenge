//  day 2 operators

//  Arithmetic operatos

// sum
let a = 10;
let b = 15;
let sum = a + b;
console.log(sum);
//  25

// subtract
let c = 20;
let d = 15;
let subtract = c - d;
console.log(subtract);
// 5

// multiply
let e = 10;
let f = 5;
let mul = e * f;
console.log(mul);
// 50

// divide
let g = 55;
let h = 11;
let divide = g / h;
console.log(divide);
// 5

// remainder
let i = 25;
let j = 7;
let remainder = i % j;
console.log(remainder);
//  4

// Assignment operators

let myage = 22;
myage += 2;
console.log(` my age is ${myage}`);
//  24

let yourage = 20;
yourage -= 2;
console.log(` your age is ${yourage}`);
//  18

//  camparison operators
// >
let value1 = 15;
let value2 = 25;

let compare = value1 > value2;
console.log(compare);
// false

// <
let value3 = 15;
let value4 = 25;

let compare1 = value1 < value2;
console.log(compare1);
// true

// <= , >=

// compare two  number using  <= , >=

function compareNum(num1, num2) {
  if (num1 >= num2) {
    console.log(`${num1} is bigger then or equal to  ${num2} `);
  } else if (num1 <= num2) {
    console.log(`${num1} is smaller then or equal to  ${num2} `);
  }
}

compareNum(10, 5);
//  10 is bigger then or equal to  5
compareNum(10, 50);
// 10 is smaller then or equal to  50

// compare tow number using == and ===
function equalNum(num1, num2) {
  if (num1 === num2) {
    console.log(`${num1} is equal with data type ${num2} `);
  } else if (num1 == num2) {
    console.log(`${num1} is equal to  ${num2}`);
  } else {
    console.log(`nothing is equal`);
  }
}

equalNum(10, 10);
//  10 is equal with data type 10
equalNum(20, "20");
//  20 is equal to  20
equalNum(5, 10);
// nothing is equal

// logical operators
// &&

let A = true;
let B = false;
let result = A && B;
console.log(result);
// false
let A1 = true;
let B1 = true;
let result1 = A1 && B1;

console.log(result1);
//  true

// logical operators
// ||

let C = true;
let D = false;
console.log(C || D);
// true

// logical operators
// !

let Login = true;

console.log(Login ? "user loged in" : "not loged in");
// user loged in

function positiveNum(num) {
  let result =
    (num >= 0)
      ? `${num} is a positive  number `
      : ` ${num} is a negative number `;
  console.log(result);
}

positiveNum(-5);
//  -5 is a negative number 
positiveNum(65);
// 65 is a positive  number 