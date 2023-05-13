// create a function that checks for the middle character of the string
// break down the length of the string and find the middle element
// if it is even return 2 numbers
// str.length / 2


function centerOf(str) {
    let length = str.length / 2
    if (str.length === 1) {
        console.log(str[0]);
    } else if (str.length % 2 === 0) {
        console.log(str.slice(length - 1,(length - 1) + 2 ));
    } else {
        console.log(str.slice(length, length + 1));
    }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x" 