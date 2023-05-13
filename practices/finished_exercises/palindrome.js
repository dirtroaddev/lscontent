// create a function that accepts a string
// use reverse to check whether a string is the same front and back
// make it a single line
// return a boolean answer

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true