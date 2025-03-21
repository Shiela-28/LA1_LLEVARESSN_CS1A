//Task6 : Strings

// Declare variables to store the first and last names of a favorite actor.
let favActorFirstName = "Coco"; 
let favActorLastName = "Martin";

let fullName = favActorFirstName + " " + favActorLastName; // Concatenate the first and last names to create the full name.
let uppercase = fullName.toUpperCase(); // Convert the full name to uppercase.
let message = "My favorite actor is " + uppercase + "."; // Create a message that includes the uppercase full name and additional information.
message += " The best Action Movie is FPJ Ang Probinsyano."; // Adding another sentence to the message.

console.log("First Name:", favActorFirstName); // Display the first name.
console.log("Last Name:", favActorLastName); // Display the last name.
console.log("Full Name:", fullName);// Display the full name.
console.log("Uppercase Full Name:", uppercase); // Display the uppercase full name.
console.log("Message:", message);// Display the complete message.