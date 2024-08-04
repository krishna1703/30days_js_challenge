/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 3 - String Algorithms
 *  - Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
 */

// Function to count the occurrences of each character in a string
function countCharacterOccurrences(str1) {
    // Create an object to store the character counts
    let charCounts = {};
    
    // Loop through the characters in the string
    for (let char of str1) {
        // If the character is not in the charCounts object, initialize it with a count of 1
        if (!charCounts[char]) {
            charCounts[char] = 1;
        } else { // If the character is already in the charCounts object, increment the count
            charCounts[char]++;
        }
    }
    
    // Return the character counts object
    return charCounts;
}

// Define a string to count the character occurrences
let str1 = "hello world";

// Call the countCharacterOccurrences function to count the character occurrences
let charCounts = countCharacterOccurrences(str1);

// Log the character counts
console.log("Character counts:", charCounts);

/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 3 - String Algorithms
 *  - Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
 */

// Function to find the longest substring without repeating characters
function longestSubstringWithoutRepeatingCharacters(str2) {
    // Initialize variables to store the start and end indices of the substring
    let start = 0;
    let end = 0;
    
    // Initialize a set to store the characters in the current substring
    let charSet = new Set();
    
    // Initialize a variable to store the length of the longest substring
    let maxLength = 0;
    
    // Loop through the string
    while (end < str2.length) {
        // If the character at the end index is not in the set
        if (!charSet.has(str2[end])) {
            // Add the character to the set
            charSet.add(str2[end]);
            // Increment the end index
            end++;
            // Update the maxLength if the current substring is longer
            maxLength = Math.max(maxLength, end - start);
        } else {
            // If the character is already in the set, remove the character at the start index
            charSet.delete(str2[start]);
            // Increment the start index
            start++;
        }
    }
    
    // Return the length of the longest substring
    return maxLength;
}

// Define a string to find the longest substring without repeating characters
let str2 = "abcabcbb";

// Call the longestSubstringWithoutRepeatingCharacters function to find the length of the longest substring
let length = longestSubstringWithoutRepeatingCharacters(str2);

// Log the length of the longest substring
console.log("Length of the longest substring without repeating characters:", length);
