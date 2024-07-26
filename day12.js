// error handling 

//   activity  1 
//   basic error handling  with try / catch 
const error = new Promise((res, rej) => {
    try {
      throw new Error("An intentional error");
    } catch (error) {
      console.log("catch error handling:", error.message);
      rej(error); // Promise ko reject karna
    }
  });
  
  error.catch((err) => console.log("Promise rejected with error:", err.message));

   const number = (num1 , num2)=>{
try {
     if(num2 === 0) {
        throw new Error("denominator is Zero")

     }
else{
    const div  = num1 % num2
    console.log(div)
}
} catch (error) {
    console.log(`denominator Zero aagya bhai ${error}`);
}
   }

   number(12,0)
   number(12,5)
   number(0,12)


//    finally block 


const finallyBlock = (num1 , num2)=>{
    try {
        console.log("first")
         if(num2 === 0) {
            
            throw new Error("denominator is Zero")
    
         }
    else{
        const div  = num1 % num2
        console.log(div)
    }
    } catch (error) {
        console.log(`denominator Zero aagya bhai ${error}`);
    }
    finally{
        console.log("Entering finally block");
        console.log(`Sum of numbers: ${num1 + num2}`);
    }
       }
    

       finallyBlock(12,5)

    //     custom error object 


    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "CustomError";
        }
    };
    
    const numCheck = (num) => {
        try {
            if (num < 0) {
                throw new CustomError(`${num} ek nakaratmak number hai jo ki hum swikar nhi kar sakte hai`);
            } else {
                console.log(`${num} ke sakaratmak number hai yeh swikar kiya gya`);
            }
        } catch (error) {
            console.log(`${error.name} = ${error.message}`);
        }
    }
    
    numCheck(-4);
    numCheck(8);
    

  function string (str){
try {
    if(str === ""){
        throw new CustomError ("input string is empty")
    }
    else{
        console.log("str :::::" , str)
    }
} catch (error) {
    console.log(`str : ${error.name} ${error.message}`)
}
  }
  string("krishna")
  string("")


//    error handling in promises 

 const errorinpromises = new Promise((res,rej)=>{
    let number = Math.floor(Math.random()*10)
    setTimeout(()=>{
      if(number>5){
       
        res(`number  5 se bda hai : ${number}`)
      }else{
        
        rej(`number  5 se chhota  hai : ${number}`)
      }

    },5000)
 })

 errorinpromises.then((message)=>{
console.log(message)
 })

.catch((error)=>{
 console.log(error)
 })

//  Graceful handling in fetch

const fetchCatch = new Promise((resolve, reject) => {
    let API = "https://fakestoreapi.com/pros";
    fetch(API)
        .then(response => {
            if (response.ok) {

        return response.json();
            } else {
                throw new Error("Invalid API");
            }
        })
        .then(data => resolve("Data Fetched" ))
        .catch(error => reject(error))

});

fetchCatch
    .then((message) => console.log(message))
    .catch((error) => console.log(`Error Aa gya  ${error}`));








     const apidata  =  async()=>{
        try {
             const api  =  await fetch("https://fakestoreapi.com/products")
            const response   =  await api.json()
            const data  = response ; 
            console.log("data : " , data )

        } catch (error) {
             console.log("error aa gya bhai using async await with fetch" , error) 
        }
      
     }

     apidata()