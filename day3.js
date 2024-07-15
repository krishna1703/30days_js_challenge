//  control structures

// if-else

function chechNum(num) {
  if (num > 0) {
    console.log(`${num} is a positive number`);
  } else if (num < 0) {
    console.log(`${num} is a negative  number`);
  } else {
    console.log(`${num} is a zero `);
  }
}
chechNum(10);
// 10 is a positive number

//  nested if else

let age = 18;
if (age >= 18) {
  console.log(`age :${age} so person is eligible for vote`);
} else {
  console.log(` age : ${age} so person is not eligible for vote`);
}
//  age :18 so person is eligible for vote

function findlargestNum(a, b, c) {
  let largest;

  if (a >= b && b >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else if (c >= a && c >= b) {
    largest = c;
  }

  return largest;
}
let result = findlargestNum(1, 2, 5);
console.log(` largest number is :`, result);

//    largest number is : 5

// switch case

// let week = prompt(`please enter your inpur 1 to 7 `);

// week = parseInt(week);

// let day;

// switch (week) {
//   case 1:
//     day = "today is sunday";
//     console.log(day);
//     break;
//   case 2:
//     day = "today is monday";
//     console.log(day);
//     break;
//   case 3:
//     day = "today is tuesday";
//     console.log(day);
//     break;
//   case 4:
//     day = "today is wednesday";
//     console.log(day);
//     break;
//   case 5:
//     day = "today is thrusday";
//     console.log(day);
//     break;
//   case 6:
//     day = "today is friday";
//     console.log(day);
//     break;
//   case 7:
//     day = "today is saturday";
//     console.log(day);
//     break;
//   default:
//     console.log("nothing match");
//     break;
// }

// let grade = prompt(`please enter your input 60% to 100% `);

// grade = parseInt(grade);

// let gradelevel;
// switch (grade) {
//   case 60:
//     gradelevel = "your grade is E";

//     console.log(gradelevel);
//     break;
//   case 70 :
//     gradelevel = "your grade is D";

//     console.log(gradelevel);
//     break;

//   case 80:
//     gradelevel = "your grade is C";

//     console.log(gradelevel);
//     break;

//   case 85:
//     gradelevel = "your grade is B";

//     console.log(gradelevel);
//     break;

//   case 95:
//     gradelevel = "your grade is A";

//     console.log(gradelevel);
//     break;

//   default:
//     console.log("failed")
//     break;
// }

// conditional operators

function chechOddEven(num) {
    return  result = (num % 2 ===  0 ) ? "even number" : "odd number";

}

 let chech  = chechOddEven(11);
 console.log(chech)

//  combintion condtion 

 let leapyear  = prompt("enter your year");

 leapyear = parseInt(leapyear);

 if(leapyear%4 ==0 && leapyear%100 != 0  )
 {
    console.log("leap year")
 }
 else if( leapyear%100 == 0 && leapyear%400 == 0){
    console.log("leap year")
 }
 else{
    console.log("your year is not a leap year")
 }