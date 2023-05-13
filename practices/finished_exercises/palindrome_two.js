// create a function that accepts a string
// use reverse to check whether a string is the same front and back
// make it a single line
// return a boolean answer

function isRealPalindrome(str) {
    return str.replace(/[^a-zA-Z]+/g, '').toLowerCase() === str.replace(/[^a-zA-Z]+/g, '').toLowerCase().split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false