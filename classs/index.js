//  class defination

// Classes are defined using the class keyword.
// Constructor initializes the object.
// Methods define behaviors.
// Inheritance allows a class to extend another class using the extends keyword.

// The constructor method is called when you create a new instance of the class

// In JavaScript, a class is a blueprint for creating objects. It encapsulates data and functions that operate on that data. Here's a simple example to demonstrate how to create and use a class in JavaScript:

// task1

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name} is ${this.age} years old `;
  }
}

const result = new person("krishna", 25);

console.log(result);
console.log(result.describe());

//    Class Definition: The persone class is defined with a constructor and a describe method.
// Object Creation: An instance of the persone class is created with the name "krishna" and age 25.
// Logging the Object: The entire object is logged, showing its properties.
// Using a Method: The describe method is called to get a string description of the person.

// task2 update age

class person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name} is ${this.age} years old `;
  }

  update(newage) {
    this.age = newage;
  }
}

const results = new person1("krishna", 25);

console.log(results);

results.update(36);
console.log(results.describe());

// class inheritance

// Class inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class (the child or subclass) to inherit the properties and methods of another class (the parent or superclass). This helps promote code reuse and organization by allowing shared functionality to be defined in a common parent class and then inherited by multiple child classes.

// Key Concepts of Inheritance

// Parent Class (Superclass): The class whose properties and methods are inherited.

// Child Class (Subclass): The class that inherits the properties and methods of another class.

// Benefits of Inheritance
// Code Reusability: Common code can be written in the parent class, and child classes can reuse this code.
// Maintainability: Easier to update and maintain the code since changes in the parent class automatically propagate to child classes.
// Extensibility: New functionality can be easily added by extending existing classe

class Person5 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `This is ${this.name} and they are ${this.age} years old.`;
  }
}

class Student extends Person5 {
  constructor(name, age, studentId) {
    super(name, age); // Correctly call the parent class constructor with name and age
    this.studentId = studentId;
  }

  getStudentId() {
    return `This is ${this.name}, they are ${this.age} years old, and their student ID is ${this.studentId}.`;
  }

  greeting() {
    return `This is ${this.name}, and they are ${this.age} years old.`;
  }
}

const ID = new Student("Krishna", 25, 47);
console.log(ID);
// Object of Student with properties

console.log(ID.getStudentId());
// Student ID details

const parent = new Person5("Neha", 23);
console.log(parent.greeting());
// Greeting from Person

const newId = new Student("sohit", 25, 47);
console.log(newId.greeting());

// static  methods and properties

// Static methods and properties are defined on the class itself rather
//  than on instances of the class. This means you can call these methods and 
//  access these properties without creating an instance of the class.


// Static Methods
// Static methods are useful for utility functions, factory methods, 
// or other operations that don't require access to an instance's properties.



// Static Properties
// Static properties are useful for class-level data, such as configuration settings or constants.

// Here's an example demonstrating static methods and properties:

class bigperson {
  constructor(name, age) {

    this.name = name;
    this.age = age;

  }

  greeting() {
    return `This is ${this.name} and they are ${this.age} years old.`;
  }

  // static method

  static species() {
    return "Homo sapiens";

  }

  // Static property

  static planet = "earth";

}



class child extends bigperson {


  static studentCount = 0;


  constructor(name, age, studentId) {
    super(name, age); // Correctly call the parent class constructor with name and age
    this.studentId = studentId;
    child.studentCount++;

  }

  getStudentId() {
    return `This is ${this.name}, they are ${this.age} years old, and their student ID is ${this.studentId}.`;
  }

  greeting() {
    return `This is ${this.name}, and they are ${this.age} years old.`;
  }


  // Static method
  static schoolName() {
    return 'vbspu School';
  }

  // Static property
  static schoolLocation = 'Noida';

}


const beta = new child('Krishna', 25, 47);
console.log(beta.getStudentId()); // Instance method
console.log(beta.greeting()); // Instance method


// Accessing static methods and properties directly from the class

console.log(bigperson.species()); // Homo sapiens
console.log(bigperson.planet); // Earth

console.log(child.schoolName()); // XYZ School
console.log(child.schoolLocation); // Noida




// task 6

const student1 = new child('Karan', 28, '4352');
const student2 = new child('Nijjar', 23, '8331');
const student3 = new child('Hargun', 30, '7065');

const totalStudents = child.studentCount;

console.log(`the total number of child ${totalStudents}`)



// getters and setters in class

class Krishna {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  // Getter for fullname
  get fullname() {
    return this._firstname + ' ' + this._lastname;
  }

  // Setter for fullname
  set fullname(newname) {
    if (typeof newname === 'string') {
      const names = newname.split(' ');
      this._firstname = names[0];
      this._lastname = names.slice(1).join(' ');
    } else {
      console.error('Invalid input: Please provide a string.');
    }
  }
}

const Fullname = new Krishna('Krishna', 'Kumar Sharma');

console.log(Fullname.fullname); // Output: Krishna Kumar Sharma

// Setting a new full name
Fullname.fullname = 'Sohit Sharma';

console.log(Fullname.fullname); // Output: Sohit Sharma


// private field 

class Account {
  // Private field named 'balance'
  #balance;

  constructor(initialBalance = 0) {
      this.#balance = initialBalance;
  }

  deposit(amount) {
      if (amount > 0) {
          this.#balance += amount;
      } else {
          console.error(`Deposit amount must be positive`);
      }
  }

  withdraw(amount) {
      if (amount > 0) {
          if (amount <= this.#balance) {
              this.#balance -= amount;
          } else {
              console.error(`Insufficient Withdrawal amount`);
          }
      } else {
          console.error(`Withdrawal amount must be positive`);
      }
  }

  getBalance() {
      return `The total balance is ${this.#balance}`;
  }
}

// Task 10 : Create an instance of Amount class and test the deposit and withdraw methods.

const acc = new Account(180);

acc.deposit(50);
console.log(acc.getBalance()); // The total balance is 230

acc.withdraw(40);
console.log(acc.getBalance()); // The total balance is 190

acc.withdraw(300); // Insufficient Withdrawal amount
console.log(acc.getBalance()); // The total balance is 190