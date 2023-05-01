const readline = require('readline-sync');
let continues = true;
let messages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}



function invalidNumber(number) {
  return number.trimStart() === '' ||  Number.isNaN(Number(number));
}
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the results to the terminal.

while (continues) {
prompt(messages[0].question);
prompt(messages[1].question);
const number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(messages[2].question);
  number1 = readline.question();

}



prompt(messages[3].question);
const number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(messages[4].question);
  number2 = readline.question();

}
console.log(messages[5].question);
const operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
}



console.log(`Your calculation is ${output}`);
prompt(messages[6].question)
let keepGoing = readline.question()

if(keepGoing === "N") {
  continues = false;
}

}