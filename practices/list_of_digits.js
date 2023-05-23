// create a function that excepts a number
// convert the number to a string
// convert the string to an array
// return the new array


function digitList(num) {
    return num.toString().split('');
}


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
