// create a program two gather input from the user => two inputs
// do each arithmetic on the numbers
// return the output

const readline = require('readline-sync');

function prompt(message) {
     console.log(`=> ${message}`);
}


function arithmatic(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
    console.log(`${num1} % ${num2} = ${num1 % num2}`);
    console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
    
}


prompt('Enter the first number:');
const firstNumber =  Number(readline.question());

prompt('Enter the second number:');
const secondNumber = Number(readline.question());

arithmatic(firstNumber, secondNumber);