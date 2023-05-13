// create functions to prompt the user and to display the madlib
// get user input for verb, noun, adjective, adverb
const readline = require('readline-sync');

function prompt(message) {
    console.log(`==> ${message}`);
}

function madLibs(noun, verb, adverb, adjective) {
    return `The ${noun} has a quick ${verb} and spotted a ${adjective} bush that it jump towards ${adverb}. `;
}

prompt('Please enter a noun:');
const noun = readline.question();

prompt('Please enter a verb:');
const verb = readline.question();

prompt('Please enter an adverb:');
const adverb = readline.question();

prompt('Please enter an adjective:');
const adjective = readline.question();

console.log(madLibs(noun, verb, adverb, adjective));