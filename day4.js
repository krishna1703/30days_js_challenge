// loops

// Activitie1  for loop

//  for (let i = 1; i <= 10 ; i++) {
//     // const num = i;
//     // console.log(num)
//  }

//  for (let i = 1; i <= 10 ; i++){

//     console.log(`5${i} = ${i*5}`)
//  }

//  activity 2 while loop
//  sum of 1 to 10;

//  let i  = 1;
//  let sum  = 0;
//  while (i<=10) {
//   sum  += i
//   i++;

//     }
// console.log(sum)

//  print number 10 to 1 ;

// let i = 10;
// while(i>=1){

//     console.log(i)
//     --i;
// }

// activity 3 Do .... while loop

//     let i = 1;

//   do {
//    console.log(i);
//    i++

//   } while (i<=5);

// factorial 5!

const findfactorial = (num) => {
  let factorial = 1;
  do {
    factorial *= num;
    num--;
  } while (num >= 1);

  return factorial;
};

const result = findfactorial(5);
//  console.log(result)

//  120

// /pattern nested loop

  let num = 5 ;
  for( let i = 1 ; i<=num ; i++ ){

    let pattern = " ";

    for(let j = 1; j<=i ;j++){
pattern += "*" ;
    }

    console.log(pattern);
  }

//    loop control statement

for(i = 1; i <= 10; i++){
    if(i === 5){
        console.log("skip 5 number")
      continue;
    }
    console.log(i)
  }

  for(i = 1; i <= 10; i++){
    if(i === 7){
        console.log("braek before 7 number")
      break;
    }
    console.log(i)
  }