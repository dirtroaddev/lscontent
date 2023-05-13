const readline = require('readline-sync');


function prompt(message) {
    console.log(`=> ${message}`);
}

prompt('What is the bill?');
let bill = readline.question();

prompt('What is the tip percentage?');
let tip = readline.question();

console.log(typeof tip)

const tipPrice = Numberbill * `.${tip}`
prompt(`The tip is $${(tipPrice).toFixed(2)}`);
prompt(`The total is $${(Number(bill) + tipPrice).toFixed(2)}`);
