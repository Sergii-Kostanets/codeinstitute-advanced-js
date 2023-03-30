/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
    // without destructuring
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log("John: ", john);
console.log("Mary: ", mary);
console.log("Joe: ", joe);
    // with destructuring
let [john2, mary2, joe2] = ages;
console.log("John2: ", john2);
console.log("Mary2: ", mary2);
console.log("Joe2: ", joe2);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accauntant',
}
let { mike, jill, alicia } = jobs;
console.log("Mike: ", mike);
console.log("Jill: ", jill);
console.log("Alicia: ", alicia);

// Destructuring subsets
let lenguages = ['english', 'french', 'spanish', 'german', 'japanese'];

let [johnNative, johnSecondary] = lenguages;
console.log("John's native lenguage: ", johnNative);
console.log("John's secondary lenguage: ", johnSecondary);

let [, , maryNative, marySecondary] = lenguages;
console.log("Mary's native lenguage: ", maryNative);
console.log("Mary's secondary lenguage: ", marySecondary);

let lenguages2 = {
    firstLenguage: 'english',
    secondLenguage: 'french',
    thirdLenguage: 'german',
    fourthLenguage: 'japanese',
};
let { firstLenguage, thirdLenguage } = lenguages2;
console.log("First lenguage: ", firstLenguage);
console.log("Third lenguage: ", thirdLenguage);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log("Favorite fruit: ", favorite);
console.log("Second favorite fruit: ", secondFavorite);
console.log("Other fruits: ", others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegeterian',
    andrea: 'steak',
};
let { brian, anna, ...rest } = favoriteFoods;
console.log("Brian's favorite food: ", brian);
console.log("Anna's favorite food: ", anna);
console.log("Rest: ", rest);