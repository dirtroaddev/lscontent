// create a function that accepts two arrays
// create an empty array
// loop through both arrays pushing an element from each one alternating to the empty array
// return the empty array

function interleave(arr1, arr2) {
    let newArr = [];
    for(let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]