//  day 7 object 

// activites 1  object creation and access

// task 1 

const book = {
 title : "30days of js",
 author: "krishna kumar",
 year: 2024

}

 console.log(book)

//  task 2
 console.log(` author : ${book.author}, title : ${book.title} , year :${book.year}`)

//  activites 2   object methods
// task3,4


const book1 = {
    title : "30days of js",
    author: "krishna kumar",
    year: 2024
   
   }


  const newMethod = function(){
    return `book-title:${this.title} ,book-author:${this.author}`
  }

 book1.getinfomethod  = newMethod 

   console.log(book1.getinfomethod())

   console.log(`new methods to call an object ` , book1)

//    

 const Update = (Year)=>{
 return this.year = Year;

 }


 const book2 = {
    title : "30days of js",
    author: "krishna kumar",
    year: 2024
   
   }

 const update_bookYear = function (year) {
    return (book2.year = year);
  };
  update_bookYear(2017);
  console.log("new book object with updated year >>>", book2);


//   Activities 3 Nested object  



const book_Library = {
    library_name: "The central Library",
    books: [
      { title: "Bhagwad Gita - The Song divine", author: "Ved Vyas" },
      { title: "Gora", author: "Rabindranath Tagore" },
      { title: "Godan", author: "Munshi Premchand" },
    ],
  };

   console.log( " book_Library",book_Library);


   console.log( book_Library.library_name )


    const getTitle = book_Library.books
    const result =  getTitle.map((item)=> item.title)

     console.log(result)


    // activities  4 this keyword

     const getAccess =function(){
        return `title : ${this.title}, year :${this.year}`;
     }


      
 const book3 = {
    title : "30days of js",
    author: "krishna kumar",
    year: 2024
   
   }
     book3.setthis = getAccess

     console.log("getAccess" ,  book3.setthis())

    //   fat arrow function me this keyword kam ni krta hai value to set krne me  

    // activities  5 object iteration

    //  for...in 
    // object.keys object.value

    const books = { title: "Gaban", author: "Munshi Premchand", year: 1928 };

     for(let keys in books){
        console.log(keys)
        //  sare key print hogi 
        console.log( "books",books[keys])
        // sare value print hogi
     }
       

    //  object.keys object.value


console.log("Keys", Object.keys(books));
console.log("values", Object.values(books));
