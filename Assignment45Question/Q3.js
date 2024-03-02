"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = ("tanzeel");
// Lowercase
console.log(personName.toLowerCase());
// Uppercase
console.log(personName.toUpperCase());
// Titlecase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1, 7));
