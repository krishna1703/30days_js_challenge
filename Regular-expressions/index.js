// basic Regular expressions
// Activity 1: Basic Regular Expressions

 const regex = /\bJavascript\b/gi;
 const str  =  "JavaScript is fun. I am learning JavaScript. JavaScript is versatile."
 const match=   str.match(regex)

 console.log(match);


//  
const digit = /\d+/g; // Matches one or more digits
const phonenumber = "My phone number is 123-456-7890 and my postal code is 98765.";
const matches = phonenumber.match(digit)

console.log(matches)

// Activity 2: Character Classes and Quantifiers
const cap = /\b[A-Z][a-zA-Z]*\b/g
const str1 = "Alice and Bob went to the Mall. They saw Dr. Smith and Prof. Johnson.";
const capitallatter =  str1.match(cap);
console.log(capitallatter)

const digits = /\d+/g; // Matches one or more digits
const phone = "My phone number is 123-456-7890 and my postal code is 98765.";
const matchesphonenumber = phonenumber.match(digit)

console.log(matchesphonenumber)

// Activity 3: Grouping and Capturing

const task5Regex = /\((\d{3})\) (\d{3})-(\d{4})/;
const task5Text = "The phone number is (122) 443-7890.";

const task5MatchResult = task5Text.match(task5Regex);

if (task5MatchResult) {
  const [ areaCode, centralOfficeCode, lineNumber] = task5MatchResult;
  console.log(`Area code: ${areaCode}`);
  console.log(`Central office code: ${centralOfficeCode}`);
  console.log(`Line number: ${lineNumber}`);
}   


const task6Regex = /^(\w+)@([\w.]+)$/;
const task6Text = "krishna@gmail.com";

const task6Matches = task6Text.match(task6Regex);

if (task6Matches) {
  const [, username, domain] = task6Matches;
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
}


// Activity 4: Assertions and Boundaries

//  for match start /^(\w+)/ and  /(\w+)$/
const re = /(\w+)$/;
const task = "krishna kumar";

const Assertions = task.match(re);
if (Assertions) {
    console.log("matched", Assertions[1]);
} else {
    console.log("not matched");
}


// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!$%^&*])[A-Za-z\d@!$%^&*]{8,}$/;
const password = "Pass$123";

const isValidPass = passwordRegex.test(password);

console.log(`Password: ${password} - Valid: ${isValidPass}`);

// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-\.~!$&'()*+,;=:@%]*)*$/i;
const url = "https://www.google.com";

const isValidUrl = urlRegex.test(url);

console.log(`URL: ${url} - Valid: ${isValidUrl}`);
