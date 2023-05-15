// create an array that accepts two arrays
// use spread to combine both arrays
// add the arrays to a new array
// return the new array

function union(arr1, arr2) {
    let finalArray = [...arr1, ...arr2]
    let set = new Set(finalArray);
    console.log(Array.from(set));
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]