// create a function that removes duplicates
// create a function  named crunch
// loop through the string and check whether the letter is there more than once

function crunch(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < i + 2 ; j++) {
            if (str[i] !== str[j]) {
                newStr += str[i]
            }
        }
    }
    return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""