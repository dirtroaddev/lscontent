// create a function to check the users retirement age
// create the function with an age paramter and a retirement goal
// get input from user
// display information to the user

const readline = require('readline-sync');

function prompt(message) {
    console.log(`==> ${message}`);
}

function retirementGoal(age, goal) {
    const date = new Date();
    const retireAgeGap = goal - age;
    return date.getFullYear() + retireAgeGap;
}

function retirementAge(age, goal) {
    const date = new Date();
    const yearGap = retirementGoal(age, goal) - date.getFullYear()
    return yearGap
}

prompt('What is your age?');
const age = Number(readline.question());

prompt('At what age would you like to retire?');
const goal = Number(readline.question());


console.log(`It's 2023. You will retire in ${retirementGoal(age, goal)}`);
console.log(`You have only ${retirementAge(age, goal)} years of work to go!`);