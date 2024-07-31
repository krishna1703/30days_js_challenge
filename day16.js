// Recursion

// Recursion in JavaScript is a programming technique where a function calls itself in order to solve a problem.

function factorial(n) {
  // Base case: if n is 0, the factorial is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// basic recursion

function factorail(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorail(n - 1);
}

const number = factorail(5);
console.log(number);

// Base Case: Always have a base case to prevent infinite recursion.
// Recursive Case: Ensure that each recursive call moves towards the base case.
// Return Values: Each recursive call returns a value which is used in the next level of recursion.

// fibonacci number

function fibonacci(n) {
  // base case
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // recersive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numbers = fibonacci(10);
console.log(numbers);

// recursion with array

// 1

function sumArray(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return arr[n - 1] + sumArray(arr, n - 1);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalSum = sumArray(array, array.length);

console.log("totalSum :", totalSum);

// 2
function findMax(arr, n) {
  // base case
  if (n === 1) {
    return arr[0];
  }
  // Recursive case: find the maximum element in the rest of the array
  const maxofRest = findMax(arr, n - 1);

  // Compare the last element with the maximum of the rest
  return Math.max(arr[n - 1], maxofRest);
}

const newarray = [10, 8, 3, 14, 5, 1, 2];

const maxelemnt = findMax(newarray, newarray.length);

console.log(maxelemnt);

// string manipulation with recursion ;

// String manipulation using recursion can involve a variety of tasks, such as reversing 
// a string, checking if a string is a palindrome, or replacing characters in a string

function reversestr (str){
    if(str.length<=1){
        return str;
    }

    return reversestr(str.slice(1)) + str[0];
}



const string  = reversestr("olleh")


console.log(string)


// The function works by breaking down the string one character at a 
// time, reversing the remainder of the string, 
// and then appending the removed character to the end of the reversed
//  remainder. This process continues until the base case is reached, 
//  at which point the characters are reassembled in reverse order through the return phase of the recursion.


// palindrome string 


function palindrome (str){
 if(str.length <=1){
    return true
 }

  if(str[0] !== str[str.length-1]){

    //  check first and last if not match then false if match then call  palindrome function
    return false
  }


  return palindrome(str.slice(1,-1));
}


 const result  = palindrome("varsha")



 console.log(result)

//  

// recursive search 

// Recursive search is a technique to search through data structures using recursion.

// Recursive Function: A function that calls itself to solve smaller instances of the same problem.
// Base Case: The condition under which the recursion stops. This avoids infinite recursion and eventually ends the function calls.
// Recursive Case: The condition where the function continues to call itself with updated parameters.

function recursiveSearch( array,target,index=0){

    if(index >= array.length){
        return -1; 
    }

    if(array[index] === target){
        return index;
    }
return recursiveSearch(array,target,index+1)

}

 const res = recursiveSearch([1,2,3,5,6,7,9,10,555,22,11],6)

 console.log(res)

//  Recursive Search involves breaking down the search problem into smaller subproblems.
// Base Case checks if the target is found or if the search should stop (e.g., index out of bounds).
// Recursive Case continues the search by updating the parameters and calling the function again.



function binarySearch(arr, target, st = 0, end = arr.length - 1) {
    // Base case: if the start index is greater than the end index
    if (st > end) return -1; // Target not found

    // Calculate the middle index
    const mid = Math.floor(st + (end - st) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) return mid;

    // If the target is less than the middle element, search in the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, st, mid - 1);
    } 
    // If the target is greater than the middle element, search in the right half
    else {
        return binarySearch(arr, target, mid + 1, end);
    }
}


const binaryres= binarySearch([1,2,3,4,5,67,8,9],67 )
console.log(binaryres)
// 5
//  counting occurrences of a target element 



function targetOccurrence(arr, target) {
    if (arr.length === 0) return 0; // Base case: empty array
    const count = arr[0] === target ? 1 : 0; // Check if the first element is the target
    return count + targetOccurrence(arr.slice(1), target); // Recursive call on the rest of the array
}

const arr = [1, 2, 2, 3, 4, 2, 5];
const target = 2;

const count  = targetOccurrence(arr, target)

console.log(`Occurrence of ${target} is: ${count}`);



// implements an in-order traversal of a binary tree using recursion

class TreeNode{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

function inOrderTraverse(root, ans = []){
    if(root == null) return ans;

    //Traverse On the Left Side
    inOrderTraverse(root.left,ans);
    //Push the value
    ans.push(root.value);
    //Traverse On the Right Side
    inOrderTraverse(root.right,ans);

    return ans;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const results = inOrderTraverse(root);
console.log(`InOrder Traver is: ${results}`);
