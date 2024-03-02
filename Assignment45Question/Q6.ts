// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Store a person’s name with whitespace characters
const nameWithWhitespace = "\tJohn \nDoe\n";

// Print the name with whitespace
console.log(`Name with whitespace: ${nameWithWhitespace}`);

// Strip the whitespace characters
const nameWithoutWhitespace = nameWithWhitespace.trim();

// Print the name without whitespace
console.log(`Name without whitespace: ${nameWithoutWhitespace}`);