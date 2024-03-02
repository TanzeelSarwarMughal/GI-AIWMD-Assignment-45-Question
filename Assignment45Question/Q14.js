"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guests = [
    { name: "Albert Einstein", alive: false },
    { name: "Marilyn Monroe", alive: false },
    { name: "Elon Musk", alive: true },
];
guests.forEach((guest) => {
    const message = guest.alive
        ? `Hello ${guest.name}, you're invited to dinner!`
        : `Hello ${guest.name}, we'd love to have you at dinner, but unfortunately you're no longer with us. We'll invite you in spirit!`;
    console.log(message);
});
