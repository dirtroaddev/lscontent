let readline = require('readline-sync');


function prompt(message) {
    console.log(`=> ${message}`);
}


prompt('Please enter an integer greater than 0:');
const intOne = parseInt(readline.question());

