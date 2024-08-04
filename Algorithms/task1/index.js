// Function to implement the bubble sort algorithm
function bubbleSort(arr) {
    // Get the length of the array
    let arrayLength = arr.length;
  
    // Loop through the array
    for (let i = 0; i < arrayLength - 1; i++) {
        // Loop through the array again to compare adjacent elements
        for (let j = 0; j < arrayLength - i - 1; j++) {
            // If the current element is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
  
// Create an array of integers to be sorted
let arr = [64, 34, 25, 12, 22, 11, 90];
  
// Print the original array
console.log("Original array:", arr);
  
// Call the bubbleSort function to sort the array
bubbleSort(arr);
  
// Print the sorted array
console.log("Sorted array:", arr);


// selection sort

/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 1 - Sorting Algorithms
 *  - Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
 */


// Function to implement the selection sort algorithm
// Function to implement the selection sort algorithm
function selectionSort(arr2) {
    // Get the length of the array
    let arrayLength = arr2.length;

    // Loop through the array
    for (let i = 0; i < arrayLength - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Loop through the remaining elements to find the actual minimum
        for (let j = i + 1; j < arrayLength; j++) {
            // If the current element is less than the current minimum, update minIndex
            if (arr2[j] < arr2[minIndex]) {
                minIndex = j;
            }
        }

        // If minIndex is not the same as the initial index, swap the elements
        if (minIndex !== i) {
            let temp = arr2[i];
            arr2[i] = arr2[minIndex];
            arr2[minIndex] = temp;
        }
    }
}

// Create an array of integers to be sorted
let arr2 = [64, 34, 25, 12, 22, 11, 90];

// Print the original array
console.log("Original array:", arr2);

// Call the selectionSort function to sort the array
selectionSort(arr2);

// Print the sorted array
console.log("Sorted array:", arr2);


// quicksort algo

/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 1 - Sorting Algorithms
 *  - Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
 */


// Function to implement the quicksort algorithm
function quickSort(arr3, left, right) {
    // If the left index is less than the right index
    if (left < right) {
      // Partition the array
      let partitionIndex = partition(arr3, left, right);
  
      // Recursively call quickSort on the left and right subarrays
      quickSort(arr3, left, partitionIndex - 1);
      quickSort(arr3, partitionIndex + 1, right);
    }
  }
  
  // Function to partition the array
  function partition(arr3, left, right) {
    // Choose the rightmost element as the pivot
    let pivot = arr3[right];
    let i = left - 1;
  
    // Loop through the array
    for (let j = left; j < right; j++) {
      // If the current element is less than the pivot
      if (arr3[j] < pivot) {
        i++;
  
        // Swap the elements at i and j
        let temp = arr3[i];
        arr3[i] = arr3[j];
        arr3[j] = temp;
      }
    }
  
    // Swap the elements at i+1 and the pivot
    let temp = arr3[i + 1];
    arr3[i + 1] = arr3[right];
    arr3[right] = temp;
  
    // Return the partition index
    return i + 1;
  }
  
  // Create an array of integers to be sorted
  let arr3 = [64, 34, 25, 12, 22, 11, 90];
  
  // Print the original array
  console.log("Original array:", arr3);
  
  // Call the quickSort function to sort the array
  quickSort(arr3, 0, arr3.length - 1);
  
  // Print the sorted array
  console.log("Sorted array:", arr3);
  