// create a function named negative
// check to see if the number is positive
// if number is positive make it negative
// return the negative number

function negative(num) {
    console.log(num >= 0 ? -num : num);
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0