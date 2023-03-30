/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
console.log("Sum: ", sumAll(1, 2, 3));

// Extra arguments are ignored
console.log("Sum with extra arguments: ", sumAll(1, 2, 3, 4, 5, 6));

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
console.log("Sum using ...rest: ", sumRest(1, 2, 3, 4, 5, 6));
