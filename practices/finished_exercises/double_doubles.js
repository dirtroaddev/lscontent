// create a function to check whether a number is a double double
// create a function that takes in a number parameter
// see if the number can split into half, use a toString to convert to a string
// return the number either doubled if not a double double or the number itself if it is a double doubl

function twice(num) {
    const numberSplit = num.toString();
    
    if (numberSplit.length % 2 === 0) {
        if (numberSplit.slice(numberSplit.length / 2) === numberSplit.slice(0, numberSplit.length / 2)) {
            console.log(numberSplit);
        } else {
            console.log(Number(numberSplit) * 2);
        }
    } else {
        console.log(Number(numberSplit) * 2);
    }
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676