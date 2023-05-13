// create a function that accepts an array
// use a loop to loop through the array
// add items ot a new array//or use map
// return the new array

function runningTotal(arr) {
    
    let holdArr = [arr[0]];
    if (arr.length == 0) {
        return [];
    }
    for (let i = 0; i < 1; i++) {
        
        for (let j = 1; j < arr.length; j++) {
 
            holdArr.push(holdArr[j - 1] + arr[j]);
           
        }
        
    }
    return holdArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []