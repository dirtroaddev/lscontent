// create a function that accepts a string
// use a loop to search for each character
// compare the character to an array of numbers
// return the correct number

function stringToInteger(str) {

    let newArr = [];
    let num = 0;
    for(let i = 0; i < str.length; i++) {
       for(let j = 0; j <= 9; j++) {
            if (str[i] == j) {
                newArr.push(j);
            }
       }
    }

    for(let j = 0; j < newArr.length; j++) {
        num = num * 10 + newArr[j]
    }
    return num;
}

function stringToSignedInteger(str) {
    let newStr = '';
    let sign = '';
    if (str[0] === '+') {
        newStr =str.slice(1);
        return stringToInteger(newStr);
    } else if (str[0] === '-') {
        newStr = str.slice(1);
        
        return stringToInteger(newStr) - (stringToInteger(newStr) * 2)
    } else {

        return stringToInteger(str)
    }
   
    
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true




// console.log(stringToInteger("570"))
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true