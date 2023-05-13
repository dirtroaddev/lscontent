const readline = require('readline-sync');

let sum = 0;
let product = 1;
let calculation = '';

function prompt(message) {
    console.log(`=> ${message}`);
}

prompt('Please enter an integer greater than 0:');
const firstInt = Number(readline.question());

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let answer = readline.question()

while (answer !== 's' && answer !== 'p') {
        prompt('Enter "s" to compute the sum, or "p" to compute the product.');
        answer = readline.question() 
}

for (let i = 1; i <= firstInt; i++) {
    if (answer === 's') {
        sum += i;
        calculation = 'sum';
    } else if (answer === 'p') {
        product *= i;
        calculation = 'product';
    }
}

console.log(`The ${calculation} of the integers between 1 and ${firstInt} is ${answer === 's' ? sum : product}`);