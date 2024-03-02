"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
function showMessages(messages) {
    console.log("Showing all messages:");
    for (const message of messages) {
        console.log(`Hello ${message}, how are you today?`);
    }
}
let messages = ["Ibrahim Mughal", "Ayan Salman", "Shahbaz Ali", "Hamza Shahbaz"];
showMessages(messages);
