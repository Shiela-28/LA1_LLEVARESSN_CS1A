//Task5 : Comparison or Rational operation

// Declare variables to hold two favorite numbers.
let firstFavNumb = 28; 
let secondFavNumb = 25;

// Perform comparisons and store the boolean results.
let greaterThan = firstFavNumb > secondFavNumb; // Check if the first number is greater than the second.
let lessThan = firstFavNumb < secondFavNumb; // Check if the first number is less than the second.
let greaterThanOrEqual = firstFavNumb >= secondFavNumb; // Check if the first number is greater than or equal to the second.
let lessThanOrEqual = firstFavNumb <= secondFavNumb; // Check if the first number is less than or equal to the second.
let strictEquality = firstFavNumb === secondFavNumb; // Check for strict equality (same value and type).
let looseEquality = firstFavNumb == secondFavNumb; // Check for loose equality (values are equal, type may differ).
let strictInequality = firstFavNumb !== secondFavNumb; // Check for strict inequality (different value or type).
let looseInequality = firstFavNumb != secondFavNumb; // Check for loose inequality (values are different).

// Display the original numbers.
console.log("First Favorite Number:", firstFavNumb);
console.log("Second Favorite Number:", secondFavNumb);

// Display the results of the comparisons.
console.log("Greater than:", greaterThan);
console.log("Less than:", lessThan);
console.log("Greater than or equal to:", greaterThanOrEqual);
console.log("Less than or equal to:", lessThanOrEqual);
console.log("Strict equality (===):", strictEquality);
console.log("Loose equality (==):", looseEquality);
console.log("Strict inequality (!==):", strictInequality);
console.log("Loose inequality (!=):", looseInequality);