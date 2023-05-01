let readline = require('readline-sync');

function prompt(message) {
    console.log(`=> ${message}`);
}

prompt('Enter the length of the room in meters:');
let length = readline.question();

prompt('Enter the width of the room in meters:');
let width = readline.question();

prompt(`The area of the room is ${length * width} square meters ${((length * width) * 10.7639).toFixed(2)}`);




