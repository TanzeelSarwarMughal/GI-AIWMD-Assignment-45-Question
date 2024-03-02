// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Define an array of my favorite cars
let cars: string[] = ["Supra Mk5", "Supra Mk4", "Honda Civic Type R", "Mercedes Benz"];

// Use a for loop to iterate over the array and print a statement about each car
for (let i = 0; i < cars.length; i++) 
{
    console.log(`I would like to own a ${cars[i]}.`);
}
