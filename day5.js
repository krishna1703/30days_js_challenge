//  functions

// function declaration

// check odd and even 

 function checkNum(number){

 if (number%2 == 0 ){
    console.log(`${number} this number is even `)
 }
 else{
    console.log(`${number} this number is odd`)
 }

 }
 checkNum(20)
 checkNum(15)


// calculatet the square of a number 

function squareNum(number){
    return  number*number;

}
squareNum(55)
console.log(squareNum(55))


// function Expression 

const MaxNum = function(a , b){
if(a > b ){
   return  `${a}  is  greater then ${b} `
}
else{
 return `${b}  is greater then ${a}`
}
}

// MaxNum(40,35)

console.log(MaxNum(4,35))

// concatenation

const Concat = function(c, d){

    return `${c} ${d}`
}

Concat("krishna","kumar")

console.log(Concat("krishna","kumar")
)

// arrow function

const SunNum  = (a ,b )=>{
    return  a+b;
}
// SunNum(4,5)
console.log( "sum:" , SunNum(4,5))
// sum : 9


const checkstrofchar = (str, char)=>{
return str.includes(char) ? "true" :false;
}
console.log(checkstrofchar("krishna" , "a"))

// true

// function paramter and default values


function product(first ,secondNum ){
 return first*secondNum;
}

let first = 10 ;
let secondNum = 10;

product(first,secondNum)

console.log(product(first,secondNum))
// 100


function grating (person_name , age ){
    console.log(`hiii ${person_name} and your age is : ${age}`)
}

let person_name = "krishna" 
let age  = 25;


grating(person_name ,age )
// iii krishna and your age is : 25


// higher order funtion 

function  childFun(){
    console.log("this is a child function")
}

function parentFun(callback , number){

    console.log("this is parent function")
    console.log("childFun will be called " , number , "times")
    for( let i= 0 ; i< number ; i++){

        callback()
    }

}

parentFun(childFun , 500)

// 500 this is a child function


function func1(numb){
console.log("this is a func1 is called")
return numb;
}

function func2(number){
    console.log("func2 print the number " , number)
}

function highOrderFun (f1,f2,num){
    console.log("this is higher order function")

    let number  = func1(num)

f2(number)
}


highOrderFun(func1 , func2 , 5)


