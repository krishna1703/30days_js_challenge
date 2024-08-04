/**
 * Day 18 - Algorithms
 * 
 * Activity 5 - Dynamic Programming (Optional)
 *  - Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
 */


// Function to solve the Fibonacci sequence using dynamic programming
function fibonacci(n) {
    // Initialize an array to store the Fibonacci numbers
    let fib = [0, 1];
    
    // Loop through the Fibonacci sequence
    for (let i = 2; i < n; i++) {
        // Calculate the next Fibonacci number
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    // Return the Fibonacci numbers
    return fib;
}

// Define the number of Fibonacci numbers to generate
let n = 10;

// Call the fibonacci function to solve the Fibonacci sequence
let fibNumbers = fibonacci(n);

// Log the Fibonacci numbers
console.log(`Fibonacci numbers up to ${n}:`, fibNumbers);




/**
 * Day 18 - Algorithms
 * 
 * Activity 5 - Dynamic Programming (Optional)
 *  - Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
 */


// Function to solve the knapsack problem using dynamic programming
function knapsack(values, weights, capacity) {
    // Initialize a 2D array to store the maximum values
    let dp = Array.from({ length: values.length + 1 }, () => Array(capacity + 1).fill(0));
    
    // Loop through the items
    for (let i = 1; i <= values.length; i++) {
        for (let w = 1; w <= capacity; w++) {
            // Check if the current item can be included
            if (weights[i - 1] <= w) {
                // Calculate the maximum value by either including or excluding the current item
                dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                // Exclude the current item
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    // Return the maximum value that can be obtained
    return dp[values.length][capacity];
}

// Define the values and weights of the items
let values = [60, 100, 120];

let weights = [10, 20, 30];

// Define the capacity of the knapsack
let capacity = 50;

// Call the knapsack function to solve the knapsack problem
let maxValue = knapsack(values, weights, capacity);

// Log the maximum value that can be obtained
console.log("Maximum value that can be obtained:", maxValue);