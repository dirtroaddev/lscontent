// create a function that sets teddys age
// set a random number between 20 and 120
// return the random number
// display the age to the user


function teddysAge() {
    const randNum = Math.floor(Math.random() *( 120 - 20) + 20);
    return `Teddy is ${randNum} years old!`;
}


console.log(teddysAge());