// create a program to accept greetings from user
// use readline to get data from user
// check whether the input has an !
// display a greeting to the user


const readline = require('readline-sync');

function prompt(message) {
    console.log(`=> ${message}`);
}

prompt('What is your name?');
const name = readline.question();


if (name.endsWith('!')) {
    const redoneName = name.slice(0, name.length -1);
    console.log(`HELLO ${redoneName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
    console.log(`Hello, ${name}.`);
}