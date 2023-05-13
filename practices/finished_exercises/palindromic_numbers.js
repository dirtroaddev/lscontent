// create a function that accepts a number as an integer
// convert the number to a string
// check whether the number is the same front and backwards
// return a boolean value

function isPalindromicNumber(number) {
    return number === Number(number.toString().split('').reverse().join(''))
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true