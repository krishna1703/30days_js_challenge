/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 2 - Searching Algorithms
 *  - Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
 */


// Function to implement the linear search algorithm
function linearSearch(arr1, target) {
    // Loop through the array
    for (let i = 0; i < arr1.length; i++) {
        // If the current element is equal to the target value
        if (arr1[i] === target) {
            // Return the index of the target value
            return i;
        }
    }
    // If the target value is not found, return -1
    return -1;
}

// Create an array of integers
let arr1 = [64, 34, 25, 12, 22, 11, 90];

// Define the target value to search for in the array
let target1 = 22;

// Call the linearSearch function to find the target value in the array
let index1 = linearSearch(arr1, target1);

// Log the index of the target value 
if (index1 !== -1) {
    console.log(`The target value ${target1} is found at index ${index1}.`);
} else {
    console.log(`The target value ${target1} is not found in the array.`);
}


/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 2 - Searching Algorithms
 *  - Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
 */


// Function to implement the binary search algorithm
function binarySearch(arr2, target) {
    // Define the left and right pointers 
    let left = 0;
    let right = arr2.length - 1;
    
    // Loop through the array while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Calculate the middle index of the array
        let mid = Math.floor((left + right) / 2);
        
        // Check if the middle element is equal to the target value, return the index
        if (arr2[mid] === target) {
            return mid;
        } else if (arr2[mid] < target) { // If the middle element is less than the target value, update the left pointer
            left = mid + 1;
        } else { // If the middle element is greater than the target value, update the right pointer
            right = mid - 1;
        }
    }
    
    return -1;
}

// Create a sorted array of integers
let arr2 = [11, 12, 22, 25, 34, 64, 90];

// Define the target value to search for in the array
let target2 = 22;

// Call the binarySearch function to find the target value in the array
let index2 = binarySearch(arr2, target2);

// Log the index of the target value
if (index2 !== -1) {
    console.log(`The target value ${target2} is found at index ${index2}.`);
} else {
    console.log(`The target value ${target2} is not found in the array.`);
}
