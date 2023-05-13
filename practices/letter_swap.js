// create a function that accepts a string
// convert string to an array to seperate them using split
// use slice to seperate first and last letter
// return the string

function swap(str) {
    let newStr = "";
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 1) {
            newStr += arr[i];
            newStr += ' ';
        }
        else if(arr[i].length == 2) {
            newStr += arr[i][arr[i].length - 1] + arr[i][0];
            newStr += ' ';
        } else {
            newStr += arr[i][arr[i].length - 1] + arr[i].slice(1, arr[i].length - 1) + arr[i][0];
            newStr += ' ';
        }
    }
    console.log(newStr);
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"