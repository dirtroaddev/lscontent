// create a function that takes an array as a parameter
// loop through the array to place the items in seperate arrays
// check to make sure the array is odd or evenly split
// return the new array of arrays

function halvsies(arr) {
    let firstHalf = [];
    let secondHalf = [];
    let length = arr.length;
    if (arr.length === 0) {
        return []
    }
   
    arr.forEach((val, index) =>{
        if (index < (length / 2)) {
            firstHalf.push(val);
        } else {
            secondHalf.push(val);
        }
    });

    return [firstHalf, secondHalf]
    
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
