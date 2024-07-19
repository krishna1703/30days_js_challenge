// arrays
 
//  activity 1  array creation and access

// task1

 const array  = new Array(1,2,3,4,5)

 console.log(array);

//  task 2

console.log(`first array of  element, ${array[0]}`)
console.log(`last array of element, ${array[array.length-1]}` )

//  activity 2  array methods (basic)
  
// task 3

array.push(6)
console.log(array);

// task 4

array.pop()
console.log(array);

// task 5 
array.shift()
console.log(array);

// task 6
array.unshift(10);
console.log(array);



// activity 3

// task 7
const arrays = [1,2,3,4,5,6,7,8,9,10];
 const double  = arrays.map((item)=> item*2 )

 console.log(double)

//  task 8

 const even  = arrays.filter((items)=> items%2 === 0  )

console.log(`only even number ${even}`)

// task 9 
const sums = arrays.reduce((acc,cuuval)=> acc+cuuval ,0)

console.log(`sum of an array is :  ${sums}`)


// activity  4 

// array iteration

// task 10

for(let i = 1; i<=arrays.length ; i++){
    console.log(`array iteration : ${i}`)
}

// task 11
arrays.forEach((item)=> console.log(`array iteration using for each :${item}`))

// activity   5 

// task 12

// muti-dimensional arrays

//create a two dimensional array (matrix) and log the entire array to the console
let twoArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7,8,9],
    
  ];

  combArr = [];
  for (let i = 0; i < twoArr.length; i++) {
    for (let j = 0; j < twoArr[i].length; j++) {
      combArr.push(twoArr[i][j]);
    }
  }
  console.log(combArr);
  
  //Task 12
  //access and log a specific element from the two dimensional array
 
  console.log(twoArr[1][0]);