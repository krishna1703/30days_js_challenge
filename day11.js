//  day 11 Promises and async/await

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// understanding promises

// task 1

// In JavaScript, Promises are used to handle asynchronous operations. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is created using the Promise constructor, which takes a function as an argument. This function is called immediately by the Promise implementation, and it receives two functions as parameters: resolve and reject.

// .then() is used for handling resolved values.
// .catch() is used for handling rejected values.
// .finally() is used for executing code regardless of the promise's outcome.

const vada = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("this is the vada  message run   after 2 sec");
    resolve();
  }, 2000);
});
vada.then(() => {
  console.log("resolve function run ");
});

const vada1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
});

vada1.catch(() => {
  console.log("error is got ");
});

//
// In JavaScript, Promises are used to handle asynchronous operations. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Creating a Promise
// A Promise is created using the Promise constructor, which takes a function as an argument. This function is call/ed immediately by the Promise implementation, and it receives two functions as parameters: resolve and reject.

let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    let success = true; // Change this to false to see the reject case
    if (success) {
      resolve("Operation was successful!"); // Resolve the promise
    } else {
      reject("Operation failed."); // Reject the promise
    }
  }, 2000);
});
// Consuming a Promise
// You can consume a promise using .then(), .catch(), and .finally() methods.

// .then() is used for handling resolved values.
// .catch() is used for handling rejected values.
// .finally() is used for executing code regardless of the promise's outcome.

myPromise
  .then((result) => {
    console.log(result); // This will run if the promise is resolved
  })
  .catch((error) => {
    console.error(error); // This will run if the promise is rejected
  })
  .finally(() => {
    console.log("This will run no matter what."); // This will always run
  });
// Chaining Promises
// Promises can be chained to perform a sequence of asynchronous operations. Each .then() returns a new promise, allowing you to chain additional .then() calls.

let promiseChain = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promiseChain
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 60
  });

// Handling Multiple Promises
// You can use Promise.all, Promise.race, Promise.allSettled, and Promise.any to handle multiple promises.

// chainning promises
const userlogedIn = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "krishna", age: 22, city: "noida" });
  }, 500);
});
userlogedIn
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
    console.log(` userdetails : ${res.username} ,  ${res.age} ,  ${res.city}`);
  })
  .catch(() => {
    console.log("error ");
  });

//   Promise.allSettled
// This method waits for all promises to settle, regardless of their result.
// Promise.allSettled
// This method waits for all promises to settle, regardless of their result.

// using async and await

// async and await are syntactic sugar built on top of Promises, making it easier to work with asynchronous code. They allow
// you to write asynchronous code that looks and behaves more like synchronous code, which can make it more readable and easier to debug.

// async Function
// An async function is a function that returns a Promise. It is declared with the async keyword.

// await Operator
// The await operator is used inside an async function to pause the execution of the function until the Promise is resolved or rejected.

console.log("async await ");
// for resolve

let asyncgyaan = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async ka gyaan 1.0");
    resolve("this promises is resolved");
    console.log("async ka gyaan 2.0");
  }, 5000);
});

const asyncfunction = async () => {
  try {
    const resolveValue = await asyncgyaan;
    console.log("top");
    console.log(`resolve  : ${resolveValue}`);

    console.log("bottom");
  } catch (error) {
    console.log(error);
  }
};

asyncfunction();

//  rejected

const promiseToReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Promise has not been resolved❌");
  }, 5000);
});

const handleError = async () => {
  try {
    const promiseValue = await promiseToReject;
    console.log("Success value >>>", promiseValue);
  } catch (error) {
    console.log("Error >>>", error);
  }
};
handleError();

// fetching data from api

//  fetch using promises

const fetchdatausingpromises = () => {
  fetch("https://api.escuelajs.co/api/v1/products").then((res) => {
 
    res
    .json()
      .catch((error) => 
        console.log(error) )

.then((item)=>{

 item.map((data)=>{
// console.log(data)
 })
})
    
  });
};

fetchdatausingpromises();


fetch("https://api.escuelajs.co/api/v1/products").then((res) => {
 
  res
  .json()
    .catch((error) => 
      console.log(error) )

.then((item)=>{

item.map((data)=>{
// console.log(data)
})
})
  
});

 const getdata = async ()=>{
try {
  const response  =  await fetch("https://api.escuelajs.co/api/v1/products")
  console.log("response 2 ")
  const data =  await response.json()

  // console.log(data)

  console.log("response 3")
} catch (error) {
  console.log(error)
  
}
 
 
 }

 getdata()

//  concurrent promises

const allPromise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved!");
});
const allPromise2 = new Promise((resolve, reject) => {
  resolve("Promise 2 resolved!");
});
const allPromise3 = new Promise((resolve, reject) => {
  resolve("Promise 3 resolved!");
});
const allPromise4 = new Promise((resolve, reject) => {
  resolve("Promise 4 resolved!");
});

Promise.all([allPromise1,allPromise2,allPromise3,allPromise4]).then((resolve)=>console.log(resolve))

const allPromise5 = new Promise((resolve, reject) => {
  resolve("Promise 5 has been resolved!");
});
const allPromise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Promise 6!");
});
const allPromise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise 7!");
});
const allPromise8 = new Promise((resolve, reject) => {
  resolve("Promise 8 has been resolved!");
});



// The Promise.race method is used to run multiple promises concurrently, and it resolves or rejects as soon as one of the promises in the iterable resolves or rejects. Essentially, it returns a promise that settles as soon as any of the promises in the iterable settle, with the same value or reason.


Promise.race([allPromise5,allPromise6,allPromise7,allPromise8]).then((resolve)=>console.log(resolve))