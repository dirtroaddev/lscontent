const readline = require('readline-sync');
let continues = true;

const prompt = (msg) => {
    console.log(`${msg}`)
}

const isValidNumber = (num) => {
    return num === '' || Number(num) < 0 || isNaN(num)
} 

while (continues) {

    prompt('Please enter the loan Amount.');
    const loanAmount = readline.question();
    while (isValidNumber(loanAmount)) {
        prompt('Please enter the loan Amount');
        loanAmount = readline.question();
    }

    prompt('Please enter the APR.');
    const annualRate = readline.question();
    while (isValidNumber(annualRate)) {
        prompt('Please enter the APR.');
        annualRate = readline.question();
    }

    prompt('Please enter the loan duration.');
    const loanDuration = readline.question();
    while (isValidNumber(loanDuration)) {
        prompt('Please enter the loan duration.');
        loanDuration = readline.question();
    }


   
    let annualInterestRate = Number(annualRate) / 100;
    let monthlyInterestRate = annualInterestRate / 12;
    let months = Number(loanDuration) * 12;

    let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-months))));

    prompt(`Your monthly payment is ${monthlyPayment}`);

    prompt('Would you like to get a new calculation?');
    const tryAgain = readline.question();

    while (tryAgain.toLocaleLowerCase() === 'n') {
        continues = false;
    }
}



