// create a function that accepts 6 numbers
// get user input = 6 numbers
// search using the includes
// return if the number was in it
const readline = require('readline-sync');

function prompt(message) {
    console.log(`==> ${message}`);
}

function searchString(...args) {
    let numEnd = args.splice(5, 1);
    if(args.join('').includes(numEnd[0])) {
        return `The number ${numEnd[0]} appears in ${args[0]}, ${args[1]}, ${args[2]}, ${args[3]}, ${args[4]}.`;
    }
    return `The number ${numEnd[0]} does not appear in ${args[0]}, ${args[1]}, ${args[2]}, ${args[3]}, ${args[4]}.`;

}

prompt('Enter the 1st number:');
const numberOne = readline.question();

prompt('Enter the second number:');
const numberTwo = readline.question();

prompt('Enter the third number:');
const numberThree = readline.question();

prompt('Enter the fourth number:');
const numberFour = readline.question();

prompt('Enter the fifth number:');
const numberFive = readline.question();

prompt('Enter the sixth number:');
const numberSix = readline.question();


console.log(searchString(numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix));
