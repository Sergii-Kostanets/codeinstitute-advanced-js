/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
    return a + b;
}
let sum2 = addTwoNumbers2(3, 5);
console.log(sum2)

// Single Line Arrow Function With Parameters

const addTwoNumbers3 = (a, b) => (a + b);
let sum3 = addTwoNumbers3(6, 4);
console.log(sum3)

const addTwoNumbers4 = (a, b) => a + b;
let sum4 = addTwoNumbers4(6, 4);
console.log(sum4)

const addTwoNumbers5 = a => a + 5;
let sum5 = addTwoNumbers5(6);
console.log(sum5)

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello');

const sayHello = () => console.log('Hello!');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());