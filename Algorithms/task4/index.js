/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 4 - Array Algorithms
 *  - Task 8: Write a function to rotate an array by k positions. Log the rotated array.
 */

// Function to rotate an array by k positions
function rotateArray(arr, k) {
    // Calculate the effective rotation amount
    let rotation = k % arr.length;
    
    // Reverse the entire array
    reverseArray(arr, 0, arr.length - 1);
    
    // Reverse the first 'rotation' elements
    reverseArray(arr, 0, rotation - 1);
    
    // Reverse the remaining elements
    reverseArray(arr, rotation, arr.length - 1);
}

// Function to reverse an array within a given range
function reverseArray(arr, start, end) {
    // Loop through the array from start to end 
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Define an array to rotate
let arr = [1, 2, 3, 4, 5, 6, 7];

// Define the number of positions to rotate the array
let k = 3;

// Print the original array
console.log("Original array:", arr);

// Call the rotateArray function to rotate the array by k positions
rotateArray(arr, k);

// Print the rotated array
console.log("Rotated array:", arr);


/**
 * Day 18 - Algorithms
 * 
 * Activity 4 - Array Algorithms
 *  - Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
 */


// Function to merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
    // Initialize an empty array to store the merged array
    let mergedArray = [];
    
    // Initialize two pointers for the two arrays
    let i = 0;
    let j = 0;
    
    // Loop through the arrays while both pointers are within bounds
    while (i < arr1.length && j < arr2.length) {
        // Compare the elements at the pointers
        if (arr1[i] < arr2[j]) {
            // Add the smaller element to the merged array
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    // Add the remaining elements from the first array
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    // Add the remaining elements from the second array
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    // Return the merged array
    return mergedArray;
}

// Define two sorted arrays to merge
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

// Print the original arrays
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

// Call the mergeSortedArrays function to merge the arrays
let mergedArray = mergeSortedArrays(arr1, arr2);

// Print the merged array
console.log("Merged array:", mergedArray);