// Create a function that accepts a number
// break each piece off of a numebr using math
// add each piece of the number to a string
// return the string

function integerToString(num) {
    let digits = []
    let positive = false;

    if (num === 0) {
        digits.push(num);
        return digits.join('');
    }
    if (Math.sign(num) === 1){
        positive = true;
    }
    if (Math.sign(num) === -1){
        num = (Math.abs(num))
    }
    
   while (num > 0) {
        let digit = num % 10;
       
        digits.unshift(digit);
        num = Math.floor(num / 10)

   }
   
   if (positive) {
    return `+${digits.join('')}`;
   } else if(!positive){
    return `-${digits.join('')}`;
   }
   
   
}


function signedIntegerToString(num) {
    
    return integerToString(num);
} 




console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");



// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"