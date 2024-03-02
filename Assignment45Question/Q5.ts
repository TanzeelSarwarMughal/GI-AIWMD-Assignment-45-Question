// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Bill Gates";
let famous_quote: string = '"I failed in some subjects in exam, but my friend passed in all. Now he is an Engineer in Microsoft and I am the Owner of Microsoft."';

// compose message
let Message: string = `${famous_person} once said, ${famous_quote}`;
console.log(Message); 