let firstFavNumb = 25;
let secondFavNumb = 21; 

let greaterThan = firstFavNumb > secondFavNumb;
let lessThan = firstFavNumb < secondFavNumb;
let greaterThanOrEqual = firstFavNumb >= secondFavNumb;
let lessThanOrEqual = firstFavNumb <= secondFavNumb;
let strictEquality = firstFavNumb === secondFavNumb;
let looseEquality = firstFavNumb == secondFavNumb;
let strictInequality = firstFavNumb !== secondFavNumb;
let looseInequality = firstFavNumb != secondFavNumb;

console.log("First Favorite Number:", firstFavNumb);
console.log("Second Favorite Number:", secondFavNumb);
console.log("Greater than:", greaterThan);
console.log("Less than:", lessThan);
console.log("Greater than or equal to:", greaterThanOrEqual);
console.log("Less than or equal to:", lessThanOrEqual);
console.log("Strict equality (===):", strictEquality);
console.log("Loose equality (==):", looseEquality);
console.log("Strict inequality (!==):", strictInequality);
console.log("Loose inequality (!=):", looseInequality);
